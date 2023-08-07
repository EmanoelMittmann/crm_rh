import { useMemo, useContext } from 'react'

import * as S from '@stardust-ds/react'
import { List } from 'contexts'

import { IconGlass, Button } from 'components/atoms'

import { Container, Main } from '../style'
import { Option } from 'types'

type ValueProps = Option | null | undefined

export const Professionals = () => {
  const {
    meta,
    filterOptions,
    handleSearch,
    handleFillJob,
    navigateTo
  } = useContext(List.Professional.Context)

  const { job_id, search } = meta

  const currentValue = useMemo(
    () => filterOptions.job.find((o) => Number(o.value) === job_id),
    [job_id]
  ) as ValueProps

  return (
    <Main>
      <Container gap='1rem'>
        <S.Input
          value={search}
          onChange={(e) => handleSearch(e.target?.value)}
          iconLeft={<IconGlass />}
          placeholder='Buscar...'
          width={230}
          height={42}
        />
        <S.Select
          width={230}
          placeholder='Cargo'
          options={filterOptions.job}
          value={currentValue ?? null}
          onSelect={(option: Option | null) =>
            option && handleFillJob(Number(option?.value))
          }
          onClear={() => handleFillJob(null)}
        />
      </Container>
      <Container gap='1em'>
        <S.Button
          onClick={() => navigateTo('/contractHistory')}
          color='#0066FF'
          style={{
            borderRadius: '40px'
          }}
        >
          Histórico de contrato
        </S.Button>
        <Button.New onClick={() => navigateTo('/professional/new')} />
      </Container>
    </Main>
  )
}
