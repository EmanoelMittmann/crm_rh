import { useContext } from 'react'

import { Typography } from '@stardust-ds/react'
import { AuthContext } from 'contexts'
import { theme } from 'styles'

import { Breadcrumb } from 'components/atoms'

import { Avatar, Children, ContainerMain, User } from './style'

export const Navbar = () => {
  const { user } = useContext(AuthContext)

  return (
    <ContainerMain>
      <Children justify='space-between' align='center' w='100%'>
        <Breadcrumb />
        <User>
          <Typography
            type='l6'
            fontSize={14}
            color={theme.neutrals.gray7}
          >
            {user.name}
          </Typography>
          <Avatar src={user.avatar} />
        </User>
      </Children>
    </ContainerMain>
  )
}
