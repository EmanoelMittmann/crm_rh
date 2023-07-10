import type { HeaderProps } from 'components/molecules'

export const HEADERS = [
  { field: 'user_name', label: 'Profissional', on: true },
  { field: 'hour_quantity', label: 'Quantidade de Horas' },
  { field: 'project_name', label: 'Projeto', on: true },
  { field: 'launch_date', label: 'Data de lançamento', on: true },
  { field: 'status', label: 'Status' }
] as HeaderProps[]

export const GRID_TEMPLATE = '1.3fr 1fr 1fr 1fr 1fr'
