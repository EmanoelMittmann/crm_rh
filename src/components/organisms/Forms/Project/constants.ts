import type { HeaderProps } from 'components/molecules'

export const HEADERS = [
  { field: 'professional', label: 'Profissional e cargo' },
  {
    field: 'hours_mounths_estimated',
    label: 'H/Mensais Estimadas'
  },
  {
    field: 'extra_hours_estimated',
    label: 'H/Extras Estimadas'
  },
  {
    field: 'date_start_allocation',
    label: 'Inicio da Alocação'
  },
  { field: 'status', label: 'Status' }
] as HeaderProps[]

export const GRID_TEMPLATE = '2fr .5fr .5fr .5fr .7fr'
