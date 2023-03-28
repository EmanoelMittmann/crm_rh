import { useMemo } from 'react'
import { Input, Select } from '@stardust-ds/react'
import { IconGlass, Button } from 'components/atoms'
import { Container, Main } from '../style'

import type { SelectProps } from '@stardust-ds/react'
interface Props {
  options: {
    job: SelectProps['options']
  }
  value: number | null
  set(value: number | null): void
}

type ValueProps = Option | null | undefined

export const Professionals = ({ options, set, value }: Props) => {
  const currentValue = useMemo(() => options.job.find((o) => Number(o.value) === value), [value]) as ValueProps

  return (
    <Main>
      <Container gap='1rem'>
        <Input iconLeft={<IconGlass />} placeholder='Buscar...' width={300} style={{ marginTop: '4px' }} />
        <Select
          placeholder='Cargo'
          options={options.job}
          value={currentValue ?? null}
          onSelect={(option: any) => set(option.value)}
          onClear={() => set(null)}
        />
      </Container>
      <Button.New onClick={() => {}} />
    </Main>
  )
}
