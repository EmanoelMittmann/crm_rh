import type { HeaderProps } from 'components/molecules'

export const HEADERS = [
  { field: 'id', label: 'Id', on: true },
  { field: 'name', label: 'Nome', on: true },
  { field: 'project_type_id', label: 'Tipo' },
  { field: 'date_start', label: 'Data inicial', on: true },
  { field: 'project_status_id', label: 'Status' }
] as HeaderProps[]

export const GRID_TEMPLATE = '1fr 1fr 1fr 1fr 1fr .5fr'
