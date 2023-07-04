import type { HeaderProps } from 'components/molecules'

export const HEADERS = [
  { field: 'name', label: 'Profissional', on: true },
  { field: 'cnpj', label: 'CNPJ', on: true },
  { field: 'id', label: 'N° da O.S', on: true },
  { field: 'os_generation', label: 'Geração da O.S', on: true },
  { field: 'reference', label: 'Referência', on: true },
  { field: 'status', label: 'Status', on: true }
] as HeaderProps[]

export const GRID_TEMPLATE = '1.5fr 1fr 1fr 1fr 1fr 1fr'
