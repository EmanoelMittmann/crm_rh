import type { ButtonHTMLAttributes } from 'react'

import { Button, ButtonProps } from '@stardust-ds/react'
import { theme } from 'styles'

interface Props
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonProps {
  text?: string
}

const New = ({ text = 'Cadastrar Novo', ...props }: Props) => {
  return (
    <Button
      typographyProps={{ fontWeight: 'bold', type: 'p2' }}
      bgColor={theme.brand.color.positive.pure}
      bWidth={20}
      bStyle='solid'
      style={{
        borderRadius: 25,
        color: '#ffffff'
      }}
      {...props}
    >
      {text}
    </Button>
  )
}

export default New
