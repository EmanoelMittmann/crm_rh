import { Loading } from "components/atoms"
import { TableHeader } from "components/molecules"
import { LoadingWrapper, Main } from "components/organisms/Tables/style"
import { List } from "contexts"
import { useContext, useMemo } from "react"
import { GRID_TEMPLATE, HEADERS } from "./constants"

export const ProjectTeam = () => {
    const {
        isLoading,
        handleOrder
    } = useContext(List.Project.Context)

    const Table = useMemo(() => {
        if (isLoading)
            return (
                <LoadingWrapper>
                    <Loading />
                </LoadingWrapper>
            )
    }, [isLoading])
    return (
        <Main>
            <TableHeader
                headers={HEADERS}
                template={GRID_TEMPLATE}
                handleOrder={handleOrder}
            />
            {Table}
        </Main>
    )

}