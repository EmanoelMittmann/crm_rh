import { Input, Select } from "@stardust-ds/react"
import { Button } from "components/atoms"
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

type ValueProps = Option | null | undefined

export const OrderOfService = () => {
    const nagivate = useNavigate()
    const {
        meta,
        filterOptions,
        orderOfService,
        handleSearch,
        handleFillStatus,
        handleFillInitialDate,
        handleFillFinalDate,
        handleFillRefDate,
    } = useContext(List.OrderOfService.Context)

    const { status, initialDate, finalDate, referenceDate } = meta;

    const currentValue = useMemo(
        () => filterOptions.status_O_S.find((obj) => obj.label === status),
        [status]
    

    ) as ValueProps
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
                    placeholder='Status'
                    width={230}
                    onClear={() => (null)}
                    options={StatusOS as Option[]}
                    value={currentValue ?? null}
                    onSelect={(option: Option | null) =>
                        option && handleFillStatus(option.value)
                    }
                />
                <Input
                    type={'date'}
                    width={230}
                    placeholder='Periodo Inicial'
                    onChange={(e) => handleFillInitialDate(e.target.value)}
                    value={initialDate ?? ""}
                />
                <Input
                    type={'date'}
                    width={230}
                    placeholder='Periodo Final'
                    onChange={(e) => handleFillFinalDate(e.target.value)}
                    value={finalDate ?? ""}
                />
                <Input
                    type={'date'}
                    width={230}
                    placeholder='Referência'
                    onChange={(e) => handleFillRefDate(e.target.value)}
                    value={referenceDate ?? ""}
                />
            </Container>
            <Button.New text="Gerar O.S" onClick={() => nagivate('/orderOfService/new')} />
        </Main>
    )
}