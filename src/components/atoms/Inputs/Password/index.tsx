import { useState } from 'react'

import { Input, InputProps } from '@stardust-ds/react'

import { IconEyeSlash, IconEye } from 'components/atoms'

interface Props extends Omit<InputProps, 'type'> {}

export default (props: Props) => {
  const [show, setShow] = useState(false)

  const type = show ? 'text' : 'password'
  const icon = !show ? <IconEyeSlash /> : <IconEye />

  const togglePasswordType = () => setShow(!show)

  return (
    <Input
      isFullWidth
      label='Senha'
      placeholder='senha'
      iconRight={icon}
      iconRightAction={togglePasswordType}
      {...props}
      type={type}
    />
  )
}
