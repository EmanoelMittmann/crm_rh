import { createContext, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import DEFAULT from "./constants";
import api from "api";
import { routes } from "routes";
import { PaginateContext } from "components/molecules";
import { useDebounce } from "hooks";
import { ContextProps, ProfessionalProps } from "../Professional/types";
import { ContextPropsProfessionalOS } from "./types";

export const Context = createContext({} as ContextPropsProfessionalOS)

export const Provider = ({ children }: { children: ReactNode }) => {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(true)
    const [professionalOS, setProfessionalOS] = useState<ProfessionalProps[]>([])

    const [meta, setMeta] = useState(DEFAULT.META_PROFESSIONAL_PROPS)
 

    const ContextPropsProfessionalOS = {
        professionalOS,
        isLoading,
        meta,
        navigateTo,
        paginate: { ...meta.paginate, setCurrent_page: setPage },
        handleSearch,
        handleOrder,
    }


    async function fetchList() {
        setIsLoading(true)
        const { data } = await api.get(routes.professional.list + '?limit=120',{
            params: {
                page: meta.paginate.current_page,
                search: meta.search && meta.search,
                order: meta.order,
                orderField: meta.orderField
            }
        })
        setProfessionalOS(data?.data)

        setMeta((old) => ({
            ...old,
            paginate: { ...old.paginate, last_page: data.meta.last_page }
        }))
        setIsLoading(false)
    }


    function navigateTo(url: string) {
        navigate(url)
    }

    function setPage(current_page: number) {
        setMeta((old) => ({
            ...old,
            paginate: { ...old.paginate, current_page }
        }))
    }

    function handleSearch(search: string) {
        setMeta((old) => ({
            ...old,
            search,
            paginate: { ...old.paginate, current_page: 1 }
        }))
    }

    function handleOrder(field: string) {
        setMeta((old) => ({
            ...old,
            orderField: field,
            order: old.order === 'ASC' ? 'DESC' : 'ASC'
        }))
    }


    useDebounce({
        fn: fetchList,
        listener: [
            meta.paginate.current_page,
            meta.search,
            meta.order
        ]
    })

    return (
        <Context.Provider value={ContextPropsProfessionalOS}>
            <PaginateContext.Provider
                value={{ paginate: ContextPropsProfessionalOS.paginate }}
            >
                {children}
            </PaginateContext.Provider>
        </Context.Provider>
    )
}