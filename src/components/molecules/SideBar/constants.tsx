import { ReactElement } from 'react'

import { theme } from 'styles'

import {
  IconCompanies,
  IconHome,
  IconHours,
  IconNotes,
  IconProfessional,
  IconProjects,
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

    5: createNavOption('Relatórios', <IconReports />, 'reports'),

    6: createNavOption(
      'Ordem de Serviço',
      <IconServices />,
      'services'
    ),

    7: createNavOption('Configurações', <IconSetting />, 'settings'),

    8: createNavOption('Empresas', <IconCompanies />, 'company'),

    9: createNavOption('Horas Extras', <IconHours />, 'releaseHours'),

    10: createNavOption(
      'Lançamentos de Notas',
      <IconNotes />,
      'releaseNotes'
    )
  }
]
export const Home = createNavOption('Início', <IconHome />, 'home')
