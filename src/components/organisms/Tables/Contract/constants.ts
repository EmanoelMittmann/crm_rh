import type { HeaderProps } from 'components/molecules'

export const HEADERS: HeaderProps[] = [
  { field: 'name_profissional', label: 'Nome', on: true },
  { field: 'job_profissional', label: 'Cargo', on: true },
  { field: 'company_profissional', label: 'Contratante', on: true },
  {
    field: 'date_sent_contract',
    label: 'Envio de Contrato',
    on: true
  },
  {
    field: 'date_signature_contract',
    label: 'Assinatura',
    on: true
  },
  {
    field: 'date_finish_contract',
    label: 'Fim',
    on: true
  },
  {
    field: 'status',
    label: 'Status'
  }
]

export const GRID_TEMPLATE = '1fr 1fr 1fr 1fr 1fr 1fr 1fr'
