import { Typography } from '@stardust-ds/react'
import { useLocation, useNavigate } from 'react-router-dom'
import { theme } from 'styles'
import { handlePathname, PathnameProps } from './logic'
import { To } from './style'

export const Breadcrumb = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const breadCrumber = handlePathname(pathname as PathnameProps)

  return (
    <Typography fontSize='xxxs' fontWeight='normal' color={theme.neutrals.gray7}>
      <To onClick={() => navigate(pathname)}>{breadCrumber}</To>
    </Typography>
  )
}

