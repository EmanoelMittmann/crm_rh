import type { HeaderProps } from 'components/molecules'

export const HEADERS = [
  { field: 'name', label: 'Profissional', on: true },
  { field: 'companyes.razao_social', label: 'Empresa', on: true },
  { field: 'cnpj', label: 'CNPJ', on: true },
  { field: 'fixed_payment_value', label: 'Salario', on: true },
  { field: 'commission', label: 'Comissão', on: true },
  { field: 'extra_hour_value', label: 'Horas Extra', on: true },
  { field: 'Total', label: 'Total', on: true }
] as HeaderProps[]

export const GRID_TEMPLATE = '1.3fr 1.1fr 1fr 1fr 1fr 1fr 1fr'
