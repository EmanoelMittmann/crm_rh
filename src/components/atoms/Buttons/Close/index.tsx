import { ButtonProps } from '@stardust-ds/react'

import { IconClose } from 'components/atoms'

import { Button } from './style'

const Close = ({ ...props }: ButtonProps) => {
  return (
    <Button {...props}>
      <IconClose />
    </Button>
  )
}

export default Close
