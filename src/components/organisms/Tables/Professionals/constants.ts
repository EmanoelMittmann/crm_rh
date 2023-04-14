import type { HeaderProps } from 'components/molecules'

export const HEADERS = [
  { field: 'name', label: 'Nome', on: true },
  { field: 'job', label: 'Cargo' },
  { field: 'email', label: 'Email' },
  { field: 'telephone', label: 'Telefone' },
  { field: 'city_name', label: 'Local' }
] as HeaderProps[]

export const GRID_TEMPLATE = '1fr 1fr 1.5fr 1fr 1fr 1fr'
