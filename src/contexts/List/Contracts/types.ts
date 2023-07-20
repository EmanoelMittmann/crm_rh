import { SelectProps } from '@stardust-ds/react'

export interface DefaultMetaProps {
  search: string
  initialDate: string
  finalDate: string
  status: string
  orderField: string
  order: 'ASC' | 'DESC'
  paginate: {
    current_page: number
    last_page: number
  }
}

export interface ContractContextProps {
  meta: DefaultMetaProps
  isLoading: boolean
  contract: ContractProps[]
  filterOptions: { status: SelectProps['options'] }
  paginate: {
    current_page: number
    last_page: number
    setCurrent_page(page: number): void
  }
  handleSearch(text: string): void
  handleOrder(field: string): void
  handleStatus(status: string): void
  handleDate(initial: string, end: string): void
}

export interface ContractProps {
  id: number
  created_at: string
  updated_at: string
  file_id: number | null
  status: string
  avatar_profissional: string
  company_profissional: string
  date_finish_contract: string
  date_sent_contract: string
  date_signature_contract: string
  job_profissional: string
  name_profissional: string
  key_document: string
}
