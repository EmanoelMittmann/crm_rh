import { Select } from '@stardust-ds/react'
import type { SelectProps } from '@stardust-ds/react'
import { Main } from './style'
import { forwardRef, InputHTMLAttributes, Ref } from 'react'

// NOTE: Necessário devido interface de 'ref' esperada para o <Select /> do Stardust.
import type { SelectRef } from '@stardust-ds/react/lib/esm/components/Select/interfaces'

type Props = SelectProps &
  InputHTMLAttributes<HTMLInputElement> & {
    error?: string
  }

export const Default = forwardRef(
  ({ error, onChange, name, ...props }: Props, ref) => {
    return (
      <Main>
        <Select
          {...props}
          ref={ref as Ref<SelectRef>}
          hasError={!!error}
          helperText={error ?? props.helperText}
        />
      </Main>
    )
  }
)
