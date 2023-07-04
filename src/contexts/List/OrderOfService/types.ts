import type { SelectProps } from '@stardust-ds/react'

export type { ReactNode } from 'react'

export interface DefaultMetaProps {
  status: string | null
  initialDate: string | null
  finalDate: string | null
  referenceDate: string | null
  status_O_S: number | null
  search: string
  orderField: string | null
  order: 'ASC' | 'DESC'
  paginate: {
    current_page: number
    last_page: number
  }
}

export interface ContextOrderOfServiceProps {
  meta: DefaultMetaProps
  orderOfService: OrderOfServiceProps[]
  isLoading: boolean
  filterOptions: { status_O_S: SelectProps['options'] }
  paginate: {
    current_page: number
    last_page: number
    setCurrent_page(page: number): void
  }
  navigateTo(url: string): void
  handleSearch(text: string): void
  handleOrder(field: string): void
  handleFillStatus(label: string): void
  handleFillInitialDate(date: string): void
  handleFillFinalDate(date: string): void
  handleFillRefDate(date: string): void
}

export interface OrderOfServiceProps {
  id: number
  name: string
  professional_id: number
  cnpj: number
  companies_id: number
  created_at: string
  key_document: string
  os_generation: string
  reference: string
  status: string
  updated_at: string
  avatar: string
}

export interface OrderProps {
  id: number
  professional: {
    id: number
    name: string
    company: string
    cnpj: string
    extra_hour_value: number
    fixed_payment_value: string
    commission: boolean
  }
}
