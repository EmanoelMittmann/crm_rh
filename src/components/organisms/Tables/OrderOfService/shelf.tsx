import { formatDate } from "components/utils/formatDate"
import { ContainerShelf, ContainerShelfColumn, Image, Text, TextStatus } from "../style"
import { ShelfProps } from "../types"
import { OrderOfServiceProps } from "./types"


export const Shelf = ({ config, props }: ShelfProps<OrderOfServiceProps>) => {
    const {
        id,
        name,
        cnpj,
        reference,
        os_generation,
        status,
        avatar,
    } = props 

    const tranformStatus = status === 'PENDING' ? 'Pendente' : status === 'SENT' ? 'Enviada' : 'Cancelada'
    const colorBg = status === 'PENDING' ? '#fff3d9' : status === 'SENT' ? '#ddf7e5' : '#FFE1E3'
    const colortext = status === 'PENDING' ? '#FFAE00' : status === 'SENT' ? '#1ECB4F' : '#FF3541'

    return(
        <ContainerShelf template={config.template}>
            <ContainerShelfColumn gap='.5rem' title={name} >
                <Image src={avatar ? avatar : "https://www.fiscalti.com.br/wp-content/uploads/2021/02/default-user-image.png"} />
                <Text>{name}</Text>
            </ContainerShelfColumn>
            <ContainerShelfColumn >
                <Text>{cnpj}</Text>
            </ContainerShelfColumn>
            <ContainerShelfColumn >
                <Text>{id}</Text>
            </ContainerShelfColumn>
            <ContainerShelfColumn >
                <Text>{formatDate(os_generation)}</Text>
            </ContainerShelfColumn>
            <ContainerShelfColumn >
                <Text>{reference}</Text>
            </ContainerShelfColumn>
            <ContainerShelfColumn >
                <TextStatus bgColor={colorBg} text={colortext}>{tranformStatus}</TextStatus>
            </ContainerShelfColumn>
        </ContainerShelf>
    )
}


