import type { HeaderProps } from 'components/molecules'

export const HEADERS: HeaderProps[] = [
  { field: 'user_name', label: 'Profissional', on: true },
  { field: 'hour_quantity', label: 'Quantidade de Horas' },
  { field: 'project_id', label: 'Projeto', on: true },
  { field: 'launch_date', label: 'Início', on: true }
]

export const GRID_TEMPLATE = '1fr 1fr 1fr 1fr 1fr '
