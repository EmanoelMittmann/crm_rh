import { forwardRef, InputHTMLAttributes, Ref } from 'react'

import { Select } from '@stardust-ds/react'
import type { SelectProps } from '@stardust-ds/react'
import type { SelectRefProps } from '@stardust-ds/react/lib/esm/components/Select/interfaces'

import {
  Label,
  RequiredLabel
} from 'components/atoms/Inputs/Default/style'

import { Main } from './style'

// NOTE: Necessário devido interface de 'ref' esperada para o <Select /> do Stardust.

type Props = SelectProps &
  InputHTMLAttributes<HTMLInputElement> & {
    error?: string
    required?: boolean
  }

export const Default = forwardRef(
  (
    { error, label, required, onChange, name, ...props }: Props,
    ref
  ) => {
    return (
      <Main>
        <Label>
          {label}
          {required && <RequiredLabel>*</RequiredLabel>}
        </Label>
        <Select
          {...props}
          searchable
          ref={ref as Ref<SelectRefProps>}
          hasError={!!error}
          helperText={error ?? props.helperText}
          height={props.height ?? '42px'}
          minHeight={props.minHeight ?? '42px'}
        />
      </Main>
    )
  }
)
