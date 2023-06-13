import { Input, Select } from "@stardust-ds/react"
import { Button } from "components/atoms"
import { List } from "contexts"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { Option } from "types"
import { Container, Main } from "../style"


export const OrderOfService = () => {
    const nagivate = useNavigate()
    const {
        meta,
        filterOptions,
        handleSearch,

    } = useContext(List.OrderOfService.Context)

    return (
        <Main>
            <Container gap='1em'>
                <Input
                    value={meta.search}
                    width={230}
                    placeholder='Buscar...'
                    onChange={(e) => handleSearch(e.target.value)}
                />
                <Select
                    options={{} as any}
                    placeholder='status'
                    width={230}
                    onClear={() => (null)}
                    onSelect={(option: Option | null) =>
                        option && (option.value)
                    } 
                    />
                <Input
                type={'date'}
                width={230}
                placeholder='Periodo Inicial'
                />
                <Input
                    type={'date'}
                    width={230}
                    placeholder='Periodo Final'
                />
                <Input
                    type={'date'}
                    width={230}
                    placeholder='Referência'
                />
            </Container>
            <Button.New text="Gerar O.S" onClick={() => nagivate('/orderOfService/new')} />
        </Main>
    )
}