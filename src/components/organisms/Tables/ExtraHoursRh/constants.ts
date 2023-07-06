import type { HeaderProps } from 'components/molecules'

export const HEADERS = [
  { field: 'name', label: 'Profissional', on: true },
  { field: 'hour_quantity', label: 'Quantidade de Horas' },
  { field: 'project', label: 'Projeto', on: true },
  { field: 'created_at', label: 'Data de lançamento', on: true },
  { field: 'status', label: 'Status' }
] as HeaderProps[]

export const GRID_TEMPLATE = '1.3fr 1fr 1fr 1fr 1fr'
