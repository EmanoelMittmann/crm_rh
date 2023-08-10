import { useContext, useState } from 'react'

import { List } from 'contexts'

import { IconGlass, Inputs, Selects } from 'components/atoms'
import { TODAY } from 'components/utils/dateNow'

import { Container, ContainerDate, Main } from '../style'
import { Option } from 'types'

type ValueProps = Option | null | undefined
export const ExtraHoursRh = () => {
  const {
    meta,
    handleSearch,
    handleFilterProject,
    handleFilterStatus,
    filterOptions_Project,
    filterOptions_Status,
    handleDateReference
  } = useContext(List.ExtraHoursRh.Context)

  const [initialDate, setInitialDate] = useState('')
  const { search } = meta

  return (
    <Main>
      <Container gap='1em'>
        <Inputs.Default
          value={search}
          width='230px'
          height={42}
          style={{
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            fontSize: '14px',
            fontWeight: '500',
            fontFamily: 'Poppins, sans-serif'
          }}
          iconLeft={<IconGlass />}
          placeholder='Buscar...'
          onChange={(e) => handleSearch(e.target?.value)}
        />

        <Selects.Default
          placeholder='Projetos'
          width={230}
          searchable
          options={filterOptions_Project?.project}
          onSelect={
            ((option: ValueProps) =>
              option &&
              handleFilterProject(Number(option?.value))) as any
          }
          onClear={() => handleFilterProject(null as any)}
          style={{
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            fontSize: 'inherit',
            fontWeight: '500'
          }}
        />
        <Selects.Default
          placeholder='Status'
          width={230}
          searchable
          options={filterOptions_Status?.status}
          onSelect={
            ((option: ValueProps) =>
              option &&
              handleFilterStatus(Number(option?.value))) as any
          }
          onClear={() => handleFilterStatus(null as any)}
          style={{
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            fontSize: '14px',
            fontWeight: '500',
            fontFamily: 'Poppins, sans-serif'
          }}
        />
        <ContainerDate>
          <Inputs.Date
            width={230}
            placeholder='Período Inicial'
            type={'date'}
            max={TODAY}
            onChange={(e) => setInitialDate(e.target.value)}
            value={initialDate}
          />
          <Inputs.Date
            width={230}
            placeholder='Período Final'
            min={initialDate}
            max={TODAY}
            onChange={(e) =>
              handleDateReference(initialDate, e.target.value)
            }
          />
        </ContainerDate>
      </Container>
    </Main>
  )
}
