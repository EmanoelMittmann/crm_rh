import { Input, Select } from "@stardust-ds/react"
import { IconGlass, Inputs } from "components/atoms"
import { List } from "contexts"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { Container, Main } from "../style"

export const ExtraHoursRh = () => {
    const navegate = useNavigate()
    const {meta, handleSearch} = useContext(List.ExtraHoursRh.Context)

    const { search } = meta


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
                    placeholder='Projetos'
                    width={230}
                    onClear={() => null}
                    options={[]}
                    clearable={false}
                    // onSelect={(option: Option | null) =>
                    //     option && handleFillStatus(option.value)
                    // }
                />
                <Select
                    placeholder='Status'
                    width={230}
                    onClear={() => null}
                    options={[]}
                    clearable={false}
                // onSelect={(option: Option | null) =>
                //     option && handleFillStatus(option.value)
                // }
                />
                <Inputs.Date
                    type={'date'}
                    width={230}
                    placeholder='Periodo Inicial'
                />
                <Inputs.Date 
                    type={'date'}
                    width={230}
                    placeholder='Periodo Final'
                />
            </Container>
        </Main>

    )
}