import { forwardRef } from 'react'
import type { InputHTMLAttributes } from 'react'

import { Input } from '@stardust-ds/react'
import type { InputProps } from '@stardust-ds/react'
import { theme } from 'styles'

import { Main } from './style'

type Props = InputProps &
  InputHTMLAttributes<HTMLInputElement> & {
    error?: string
  }

export default forwardRef(({ error, ...props }: Props, ref) => {
  return (
    <Main w={(props?.width as string) ?? '100%'}>
      <Input
        {...props}
        ref={ref}
        hasError={!!error}
        helperText={error ?? props.helperText}
      />
    </Main>
  )
})
