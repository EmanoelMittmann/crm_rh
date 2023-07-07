import { ButtonProps } from '@stardust-ds/react'

import { IconCloseCircle } from 'components/atoms'

import { Button } from './style'

const Close = ({ ...props }: ButtonProps) => {
  return (
    <Button {...props}>
      <IconCloseCircle />
    </Button>
  )
}

export default Close
