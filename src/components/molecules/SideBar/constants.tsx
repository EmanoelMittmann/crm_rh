import {
  IconCompanies,
  IconHome,
  IconHours,
  IconNotes,
  IconProfissional,
  IconProjects,
  IconReports,
  IconServices,
  IconSetting,
} from 'components/atoms'
import { theme } from 'styles'

export const OPTIONS = [
  {
    text: 'Início',
    icon: <IconHome />,
    color: theme.brand.color.status.neutral1,
    key: 'home',
  },
  {
    text: 'Profissionais',
    icon: <IconProfissional />,
    color: theme.brand.color.status.neutral1,
    key: 'professionals',
  },
  {
    text: 'Projetos',
    icon: <IconProjects />,
    color: theme.brand.color.status.neutral1,
    key: 'projects',
  },
  {
    text: 'Horas Extras',
    icon: <IconHours />,
    color: theme.brand.color.status.neutral1,
    key: 'extrasHours',
  },
  {
    text: 'Notas Fiscais',
    icon: <IconNotes />,
    color: theme.brand.color.status.neutral1,
    key: 'notes',
  },
  {
    text: 'Relatórios',
    icon: <IconReports />,
    color: theme.brand.color.status.neutral1,
    key: 'reports',
  },
  {
    text: 'Ordem de Serviço',
    icon: <IconServices />,
    color: theme.brand.color.status.neutral1,
    key: 'services',
  },
  {
    text: 'Configurações',
    icon: <IconSetting />,
    color: theme.brand.color.status.neutral1,
    key: 'settings',
  },
  {
    text: 'Empresas',
    icon: <IconCompanies />,
    color: theme.brand.color.status.neutral1,
    key: 'company',
  },
]
