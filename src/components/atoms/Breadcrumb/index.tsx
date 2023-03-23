import { Typography } from '@stardust-ds/react'
import { useLocation, useNavigate } from 'react-router-dom'
import { theme } from 'styles'
import { To } from './style'

export const Breadcrumb = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const breadCrumber = handlePathname(pathname)

  return (
    <Typography fontSize='xxxs' fontWeight='normal' color={theme.neutrals.gray7}>
      <To onClick={() => navigate(pathname)}>{breadCrumber}</To>
    </Typography>
  )
}

// TODO: utilizar objeto como validação, removendo excesso de ternários.
function handlePathname(pathname: string) {
  return pathname === '/home'
    ? 'Home'
    : pathname === '/professionals'
    ? 'Profissionais'
    : pathname === '/projects'
    ? 'Projetos'
    : pathname === '/NewProject'
    ? 'Projetos > Cadastrar Novo'
    : pathname === '/extrasHours'
    ? 'Horas Extras'
    : pathname === '/notes'
    ? 'Notas Fiscais'
    : pathname === '/reports'
    ? 'Relatórios'
    : pathname === '/services'
    ? 'Ordem de Serviço'
    : pathname === '/settings'
    ? 'Configurações'
    : pathname === '/company'
    ? 'Empresas'
    : pathname === '/RegisterProfessionals'
    ? 'Profissionais > Cadastrar Novo'
    : ''
}
