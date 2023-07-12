import type { HeaderProps } from 'components/molecules'

export const HEADERS: HeaderProps[] = [
  { field: 'user_name', label: 'Profissional', on: true },
  { field: 'hour_quantity', label: 'QTD de Horas' },
  { field: 'project_id', label: 'Projeto', on: true },
  { field: 'launch_date', label: 'Inicio', on: true }
]

export const GRID_TEMPLATE = '1fr 1fr 1fr 1fr 1fr '
