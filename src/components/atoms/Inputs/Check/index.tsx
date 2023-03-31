import { forwardRef, InputHTMLAttributes } from 'react'
import { Checkbox, Typography } from '@stardust-ds/react'
import type { CheckboxProps } from '@stardust-ds/react'

import { theme } from 'styles'
import { Main } from './style'

type Props = CheckboxProps &
  InputHTMLAttributes<HTMLInputElement> & {
    label?: string
  }

export default forwardRef(({ label, ...props }: Props, ref) => {
  const color = props?.checked ? theme.brand.color.status.neutral1 : theme.neutrals.gray7

  return (
    <Main w={(props?.width as string) ?? '100%'}>
      <Checkbox {...props} style={{ marginTop: '0.3rem' }} ref={ref} />
      {label && (
        <Typography type='l1' color={color}>
          {label}
        </Typography>
      )}
    </Main>
  )
})
