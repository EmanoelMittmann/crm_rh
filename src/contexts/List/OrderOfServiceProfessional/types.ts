import { Dispatch, SetStateAction } from 'react'

import { ProfessionalProps } from '../Professional/types'

export type { ReactNode } from 'react'

export interface DefaultMetaProps {
  search: string
  orderField: string | null
  order: 'ASC' | 'DESC'
  paginate: {
    current_page: number
    last_page: number
  }
}

export interface ContextPropsProfessionalOS {
  onCreateOs(): Promise<Boolean | undefined>
  selectSendProfessionals: any[]
  setProfessionalOS: Dispatch<SetStateAction<ProfessionalProps[]>>
  setSelectSendProfessionals: Dispatch<SetStateAction<any[]>>
  meta: DefaultMetaProps
  professionalOS: ProfessionalProps[]
  isLoading: boolean
  paginate: {
    current_page: number
    last_page: number
    setCurrent_page(page: number): void
  }
  navigateTo(url: string): void
  handleSearch(text: string): void
  handleOrder(field: string): void
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
