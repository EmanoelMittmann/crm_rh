import type { HeaderProps } from 'components/molecules'

export const HEADERS = [
  { field: 'professional', label: 'Profissional e cargo' },
  {
    field: 'hours_mounths_estimated',
    label: 'H/Mensais Estimadas'
  },
  {
    field: 'date_start_allocation',
    label: 'Inicio da Alocação'
  },
  {
    field: 'date_end_allocation',
    label: 'Fim da Alocação'
  },
  { field: 'status', label: 'Status' }
] as HeaderProps[]

export const GRID_TEMPLATE = '1.5fr 1fr .9fr .9fr 1fr'
