import { ReactElement } from 'react'

import { LocalStorageKeys } from 'config'
import { theme } from 'styles'

import {
  IconCompanies,
  IconHome,
  IconHours,
  IconNotes,
  IconPayments,
  IconProfessional,
  IconProjects,
  IconReleaseHours,
  IconReleaseNotes,
  IconReports,
  IconServices,
  IconSetting
} from 'components/atoms'

const neutralColor = theme.brand.color.status.neutral1

const createNavOption = (
  text: string,
  icon: ReactElement,
  key: string
) => ({
  text,
  icon,
  color: neutralColor,
  key
})

const Token = JSON.parse(
  localStorage.getItem(LocalStorageKeys.USER) as string | any
)

export const OPTIONS = [
  {
    1: createNavOption(
      'Profissionais',
      <IconProfessional />,
      'professionals'
    ),

    2: createNavOption('Projetos', <IconProjects />, 'project'),

    3: createNavOption('Horas Extras', <IconHours />, 'extrasHours'),

    4: createNavOption('Notas Fiscais', <IconNotes />, 'notes'),

    5: createNavOption('Pagamentos', <IconPayments />, 'reports'),

    6: createNavOption(
      'Ordem de Serviço',
      <IconServices />,
      'orderOfService'
    ),

    7: createNavOption('Configurações', <IconSetting />, 'settings'),

    8: createNavOption('Empresas', <IconCompanies />, 'company'),

    9: createNavOption(
      'Lançamento de Horas',
      <IconReleaseHours />,
      Token !== null && Token.isTechLead
        ? 'techLeadReview'
        : 'releaseHours'
    ),

    10: createNavOption(
      'Lançamento de Notas',
      <IconReleaseNotes />,
      'releaseNotes'
    ),

    11: createNavOption('Relatórios', <IconReports />, 'report')
  }
]
export const Home = createNavOption('Início', <IconHome />, 'home')
