import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { AuthContext } from 'contexts'
import { theme } from 'styles'

import {
  Button,
  IconDark,
  IconLogout,
  IconUbistart
} from 'components/atoms'
import {
  getConfigurations,
  saveConfigurations
} from 'components/utils/btnSelects'

import { usePermission } from 'hooks'

import { alterObject, DEFAULT_SELECT } from '../../utils'
import { Home } from './constants'
import { ContainerColumn, ContainerMain, ContainerRow } from './style'

export const Sidebar = () => {
  const navigate = useNavigate()
  const { logout } = useContext(AuthContext)
  const [selects, setSelects] = useState(DEFAULT_SELECT)
  const { Licence } = usePermission()

  useEffect(() => {
    const currentConfigurations = getConfigurations()
    setSelects(currentConfigurations)
  }, [])

  function handleSelect(btnSelect: string) {
    const updatedConfig = alterObject(selects, btnSelect)
    setSelects(updatedConfig)
    navigate(`/${btnSelect}`)
    saveConfigurations(updatedConfig)
  }

  return (
    <ContainerMain>
      <ContainerRow paddingRight='4em'>
        <IconUbistart />
      </ContainerRow>
      <ContainerColumn height='69%' left='0'>
        <Button.Menu
          key={Home.key}
          Text={Home.text}
          Icon={Home.icon}
          color={Home.color}
          fill={Home.color}
          bgActive={Home.color}
          colorActive='white'
          fillActive='white'
          onClick={() => {
            handleSelect(Home.key)
          }}
          isActive={selects[Home.key as keyof typeof DEFAULT_SELECT]}
        />
        {Licence.map(({ text, color, icon, key }) => (
          <Button.Menu
            key={key}
            Text={text}
            Icon={icon}
            color={color}
            fill={color}
            bgActive={color}
            colorActive='white'
            fillActive='white'
            onClick={() => {
              handleSelect(key)
            }}
            isActive={selects[key as keyof typeof DEFAULT_SELECT]}
          />
        ))}
      </ContainerColumn>
      <ContainerColumn height='17%' top='0.8rem' left='0'>
        <Button.Menu
          Text='Apagar as Luzes'
          Icon={<IconDark />}
          color={theme.brand.color.lightBlue}
          fill={theme.brand.color.lightBlue}
        />
        <Button.Menu
          Text='Sair'
          Icon={<IconLogout />}
          color='red'
          fill='red'
          onClick={logout}
        />
      </ContainerColumn>
    </ContainerMain>
  )
}
