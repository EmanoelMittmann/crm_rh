import { Loading } from "components/atoms"
import { TableHeader } from "components/molecules"
import { List } from 'contexts'
import { useContext, useMemo } from "react"
import { LoadingWrapper, Main } from "../style"
import { GRID_TEMPLATE, HEADERS } from "./constants"
import { Shelf } from "./shelf"

export const Projects = () => {
    const { projects, navigateTo, handleOrder, isLoading, handleUpdateStatus } = useContext(
        List.Project.Context
    )

    const POPOVER_OPTIONS = (id: number, status: boolean) => [
        {
            label: 'Editar',
            callback: () => navigateTo(`/project/${id}`),
        },
        {
            label: status ? 'Inativar' : 'Ativar',
            callback: () => handleUpdateStatus(id),
        },
    ]

    const Table = useMemo(() => {
        if (isLoading)
            return (
                <LoadingWrapper>
                    <Loading />
                </LoadingWrapper>
            )

        return projects.map((props) => (
            <Shelf
                key={props.id}
                config={{ template: GRID_TEMPLATE, options: POPOVER_OPTIONS(props.id, props.is_active) }}
                {...{ props }}
            />
        ))
    }, [isLoading, projects])

    return (
        <Main>
            <TableHeader headers={HEADERS} template={GRID_TEMPLATE} handleOrder={handleOrder} />
            {Table}
        </Main>
    )
}