import { Input, Select } from "@stardust-ds/react"
import { Button, IconGlass, Inputs } from "components/atoms"
import { List } from "contexts"
import { useContext, useMemo } from "react"
import { useNavigate } from "react-router-dom"
import { Option } from "types"
import { Container, Main } from "../style"

export const StatusOS = [
    { label: "Todos", value: "" },
    { label: "Enviada", value: "SENT" },
    { label: "Pendente", value: "PENDING" },
    { label: "Cancelada", value: "CANCELED" },
];


export const OrderOfService = () => {
    const nagivate = useNavigate()
    const {
        meta,
        handleSearch,
        handleFillStatus,
        handleFillInitialDate,
        handleFillFinalDate,
        handleFillRefDate,
    } = useContext(List.OrderOfService.Context)
    
    const {search, initialDate, finalDate, referenceDate } = meta;


    return (
        <Main>
            <Container gap='1em'>
                <Input
                    value={search}
                    width={170}
                    iconLeft={<IconGlass />}
                    placeholder='Buscar...'
                    onChange={(e) => handleSearch(e.target?.value)}
                />
                <Select
                    placeholder='Status'
                    width={180}
                    onClear={() => (null)}
                    options={StatusOS}
                    clearable={false}
                    onSelect={(option: Option | null) =>
                        option && handleFillStatus(option.value)
                    }
                />
                <Inputs.Default
                    type={'date'}
                    width={230}
                    placeholder='Periodo Inicial'
                    onChange={(e) => handleFillInitialDate(e.target?.value)}
                    value={initialDate ?? ""}
                />
                <Inputs.Default
                    type={'date'}
                    width={230}
                    placeholder='Periodo Final'
                    onChange={(e) => handleFillFinalDate(e.target?.value)}
                    value={finalDate ?? ""}
                />
                <Inputs.Default
                    type={'date'}
                    width={230}
                    placeholder={'Referência'}
                    onChange={(e) => handleFillRefDate(e.target?.value)}
                    value={referenceDate ?? ""}
                />

            </Container>
            <Button.New text="Gerar O.S" onClick={() => nagivate('/orderOfService/new')} />
        </Main>
    )
}