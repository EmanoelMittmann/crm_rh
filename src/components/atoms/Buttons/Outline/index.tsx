import { ButtonHTMLAttributes } from 'react'
import { useNavigate } from 'react-router-dom'

import { theme } from 'styles'

import { ButtonOutline } from './style'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string
  path: string
}

const Outline = ({ text, path, ...props }: Props) => {
  const navigate = useNavigate()
  return (
    <ButtonOutline
      color={theme.neutrals.gray7}
      bColor={theme.neutrals.gray4}
      bgColor={theme.neutrals.pureWhite}
      onClick={() => navigate(`/${path}`)}
      {...props}
    >
      {text}
    </ButtonOutline>
  )
}

export default Outline
