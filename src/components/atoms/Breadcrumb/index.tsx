import { useLocation, useNavigate } from 'react-router-dom'

import { Typography } from '@stardust-ds/react'
import { theme } from 'styles'

import {
  handlePathname,
  handlePrevious,
  Path,
  PathnameProps
} from './logic'
import { To } from './style'

export const Breadcrumb = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const breadCrumber = handlePathname(pathname as PathnameProps)

  return (
    <Typography
      fontSize='xxxs'
      fontWeight='normal'
      color={theme.neutrals.gray7}
    >
      <To onClick={() => navigate(handlePrevious(pathname as Path))}>
        {breadCrumber}
      </To>
    </Typography>
  )
}
