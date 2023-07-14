import { HeaderProps } from 'components/molecules'

export const HEADERS: HeaderProps[] = [
  { field: 'id', label: 'Codigo', on: true },
  { field: 'launch_date', label: 'Inicial' },
  { field: 'end_date', label: 'Final' },
  { field: 'hour_quantity', label: 'Quantidade de Horas' },
  { field: 'project_id', label: 'Projeto' },
  { field: 'status.id', label: 'Status' }
]

export const GRID_TEMPLATE = '1fr 1fr 1fr 1fr 1fr 1fr'
