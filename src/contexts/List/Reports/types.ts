import { SelectProps } from '@stardust-ds/react'

export interface DefaultMetaProps {
  search: string
  status: string
  companies_id: number | null
  date_start: string
  date_end: string
  order: 'ASC' | 'DESC'
  orderField: string
  paginate: {
    current_page: number
    last_page: number
  }
}

interface Paginate {
  current_page: number
  last_page: number
  setCurrent_page(page: number): void
}

export interface ContextReportsProps {
  meta: DefaultMetaProps
  reports: ReportsProps[]
  isLoading: boolean
  paginate: Paginate
  filterOptions: {
    companies: SelectProps['options']
    status: SelectProps['options']
  }
  handleSearch(search: string): void
  handleStatus(status: string | null): void
  handleDate(start: string, end: string): void
  handleOrder(field: string): void
  handleCompany(id: number | null): void
  handleDownLoad(id: number, type: string): void
}

export interface ReportsProps {
  id: number
  status_payment: string
  user_id: number
  fiscal_note_id: number
  order_of_services_id: number
  date_payment: string
  fiscal_note: {
    file_xml: {
      value_nf: string
    }
  }
  order: {
    id: number
    companies_id: number
    companies: {
      razao_social: string
      cnpj: string
      id: number
    }
  }
  user: {
    id: number
    name: string
    job_id: number
    professional_data: {
      id: number
      type_of_transfer: string
      pix_key_type: string
      bank: string
      agency: number
      account_number: string
      pix_key: string
      id_professional_data: number
    }
    job: {
      name: string
      id: number
    }
  }
}
