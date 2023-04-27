import { ShelfProps } from "components/organisms/Tables/Professionals/types";
import {
    ContainerShelf, 
    ContainerShelfColumn,
    Image,
    Text } from "components/organisms/Tables/style";

export const Shelf = ({props, config} : ShelfProps) => {

    const {avatar, name, job} = props

    return (

        <ContainerShelf template={config.template}>
            <ContainerShelfColumn gap='.5rem' title={name}>
                <Image src={avatar} />
                <Text>{name}</Text>
                <Text>{job.name}</Text>
            </ContainerShelfColumn>
        </ContainerShelf>
    )

}