import { InputHTMLAttributes, forwardRef, useState } from 'react'

import { Input, InputProps } from '@stardust-ds/react'

import { IconDate } from 'components/atoms/Icons'

import { Main } from './style'

type Props = InputProps &
  InputHTMLAttributes<HTMLInputElement> & {
    error?: string
    required?: boolean
    labelColor?: string
  }

export default forwardRef(
  ({ labelColor, required, error, ...props }: Props, ref) => {
    const [focus, setFocus] = useState(false)
    return (
      <Main w={(props?.width as string) ?? '100%'}>
        {!focus ? (
          <Input
            {...props}
            width={'100%'}
            onFocus={() => setFocus(true)}
            ref={ref}
            iconRight={<IconDate />}
            type='text'
            hasError={!!error}
          />
        ) : (
          <Input
            {...props}
            ref={ref}
            width={'100%'}
            type='date'
            hasError={!!error}
          />
        )}
      </Main>
    )
  }
)
