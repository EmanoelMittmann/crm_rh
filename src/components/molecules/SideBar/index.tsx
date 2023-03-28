import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, IconDark, IconLogout, IconUbistart } from 'components/atoms'
import { AuthContext } from 'contexts'
import { alterObject, DEFAULT_SELECT } from '../../utils'
import { OPTIONS } from './constants'
import { theme } from 'styles'
import { ContainerColumn, ContainerMain, ContainerRow } from './style'

export const Sidebar = () => {
  const navigate = useNavigate()
  const { logout } = useContext(AuthContext)
  const [selects, setSelects] = useState(DEFAULT_SELECT)

  function handleSelect(btnSelect: string) {
    setSelects(alterObject(selects, btnSelect))
    navigate(`/${btnSelect}`)
  }

  return (
    <ContainerMain>
      <ContainerRow paddingRight='4em'>
        <IconUbistart />
      </ContainerRow>
      <ContainerColumn height='65%' bottom='1rem' left='0'>
        {OPTIONS.map(({ text, color, icon, key }) => (
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
      <ContainerColumn height='20%' top='2rem' left='0'>
        <Button.Menu
          Text='Apagar as Luzes'
          Icon={<IconDark />}
          color={theme.brand.color.lightBlue}
          fill={theme.brand.color.lightBlue}
        />
        <Button.Menu Text='Sair' Icon={<IconLogout />} color='red' fill='red' onClick={logout} />
      </ContainerColumn>
    </ContainerMain>
  )
}
