import { forwardRef } from 'react'
import type { InputHTMLAttributes } from 'react'

import { Input } from '@stardust-ds/react'
import type { InputProps } from '@stardust-ds/react'

import { Main, RequiredLabel, Label} from './style'

type Props = InputProps &
  InputHTMLAttributes<HTMLInputElement> & {
    error?: string
    required?: boolean
  }

export default forwardRef(
  ({ error, label, required , ...props }: Props, ref) => {
    return (
      <Main
    
       w={(props?.width as string) ?? '100%'}>
        <Label>
          {label}
          {required && <RequiredLabel>*</RequiredLabel>}
        </Label>
        <Input
          {...props}
          ref={ref}
          width={'100%'}
          hasError={!!error}
          helperText={error ?? props.helperText}
        />

      </Main>
    )
  }
)
