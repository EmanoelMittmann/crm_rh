import { ReactElement } from 'react'
import {
  IconCompanies,
  IconHome,
  IconHours,
  IconNotes,
  IconProfessional,
  IconProjects,
  IconReports,
  IconServices,
  IconSetting,
} from 'components/atoms'
import { theme } from 'styles'

const neutralColor = theme.brand.color.status.neutral1

const createNavOption = (text: string, icon: ReactElement, key: string) => ({
  text,
  icon,
  color: neutralColor,
  key,
})

export const OPTIONS = [
  createNavOption('Início', <IconHome />, 'home'),
  createNavOption('Profissionais', <IconProfessional />, 'professionals'),
  createNavOption('Projetos', <IconProjects />, 'projects'),
  createNavOption('Horas Extras', <IconHours />, 'extrasHours'),
  createNavOption('Notas Fiscais', <IconNotes />, 'notes'),
  createNavOption('Relatórios', <IconReports />, 'reports'),
  createNavOption('Ordem de Serviço', <IconServices />, 'services'),
  createNavOption('Configurações', <IconSetting />, 'settings'),
  createNavOption('Empresas', <IconCompanies />, 'company'),
]
