import { createContext, useState } from "react"
import { ContextProjectProps, ProjectProps, ReactNode } from "./types"
import DEFAULT from './constants'
import api from "api"
import { routes } from "routes"
import { useNavigate } from "react-router-dom"
import { useDebounce } from "hooks"
import { PaginateContext } from "components/molecules"


export const Context = createContext({} as ContextProjectProps)

export const Provider = ({ children }: { children: ReactNode }) => {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(true)
    const [meta, setMeta] = useState(DEFAULT.META_PROPS)
    const [projects, setProjects] = useState<ProjectProps[]>([])
    const [filterOptionsType, setFilterOptionsType] = useState(DEFAULT.FILTER_OPTIONS)
    const [filterOptonsStatus, setFilterOptionsStatus] = useState(DEFAULT.FILTER_OPTIONS_STATUS)
    
    const contextProjectProps = {
        projects,
        isLoading,
        meta,
        paginate: { ...meta.paginate, setCurrent_page: setPage },
        filterOptionsType,
        filterOptonsStatus,
        handleSearch,
        handleOrder,
        handleFillProject_Type,
        navigateTo,
        handleUpdateStatus,
    }

    async function fetchListProject() {
        setIsLoading(true)
        const { data } = await api.get(routes.project.list, {
            params: {
                page: meta.paginate.current_page,
                search: meta.search && meta.search,
                project_type: meta.project_type,
                status: meta.status,
                order: meta.order,
                orderField: meta.orderField,
            },
        })
        setProjects(data?.data) 
        setMeta((old) => ({ ...old, paginate: { ...old.paginate, last_page: data.meta.last_page } }))
        setIsLoading(false)
    }

    async function handleUpdateStatus(id: number) {
        await api.put(routes.project.updateStatus(id))
        fetchListProject()
    }

    async function fetchFilters_Projects() {
        const { data } = await api.get(routes.project_type.list, { params: { is_active: 1 } })

        setFilterOptionsType({
            project_type: data.data.map(({ name, id }: { name: string; id: number }) => ({ label: name, value: id })),
        })
    }


    async function fetchFilters_Status() {
        const { data } = await api.get(routes.status.list, { params: { is_active: 1 } })
        setFilterOptionsStatus({
            status: data.data.map(({ name, id }: { name: string; id: number }) => ({ label: name, value: id })),
        })

    }


    function handleFillProject_Type() {}


    function navigateTo(url: string) {
        navigate(url)
    }

    function setPage(current_page: number) {
        setMeta((old) => ({ ...old, paginate: { ...old.paginate, current_page } }))
    }

    function handleSearch(search: string) {
        setMeta((old) => ({ ...old, search, paginate: { ...old.paginate, current_page: 1 } }))
    }

    function handleOrder(_: string) {
        setMeta((old) => ({ ...old, order: old.order === 'ASC' ? 'DESC' : 'ASC' }))
    }

    useDebounce({
        fn: fetchListProject,
        listener: [meta.paginate.current_page, meta.search, meta.project_type, meta.status, meta.order],
    })

    useDebounce({
        fn: fetchFilters_Projects,
        delay: 0,
        listener: [],
    
    })
    useDebounce({
        fn: fetchFilters_Status,
        delay: 0,
        listener: [],

    })


return <Context.Provider value={contextProjectProps}>
    <PaginateContext.Provider value={{ paginate: contextProjectProps.paginate}}>
        {children}
    </PaginateContext.Provider>
    </Context.Provider>

}