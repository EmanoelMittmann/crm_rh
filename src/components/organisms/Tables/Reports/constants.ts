import type { HeaderProps } from 'components/molecules'
export const HEADER: HeaderProps[] = [
  { field: 'company_id', label: 'Empresa Pagadora', on: true },
  { field: 'users.name', label: 'Profissional', on: true },
  { field: 'cnpj', label: 'CNPJ' },
  { field: 'fiscal_note_id', label: 'Valor da NFe' },
  { field: 'launch_date', label: 'Data de Pagamento' },
  { field: 'payment_status', label: 'Status de Pagamento' }
]

export const GRID_TEMPLATE = '1fr 1fr 1fr 1fr 1fr 1fr'
