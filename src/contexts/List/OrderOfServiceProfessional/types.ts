import { Dispatch, SetStateAction } from 'react'

export type { ReactNode } from 'react'

export interface DefaultMetaProps {
  search: string
  orderField: string | null
  order: 'ASC' | 'DESC'
  paginate: {
    current_page: number
    last_page: number
    total: number
  }
}

export interface ContextPropsProfessionalOS {
  mergeCommision(): void
  professionalsHaveCommission: OrderProps[]
  onCreateOs(): Promise<Boolean | undefined>
  checked: { [id: number]: boolean }
  setChecked: React.Dispatch<
    React.SetStateAction<{ [id: number]: boolean }>
  >
  allProfessionalChecked: boolean
  setAllProfessionalChecked: React.Dispatch<
    React.SetStateAction<boolean>
  >
  deleteCommission(id: number): Promise<void>
  selectSendProfessionals: OrderProps[]
  setProfessionalOS: Dispatch<
    SetStateAction<OrderPropsProfessional[]>
  >
  setSelectSendProfessionals: Dispatch<SetStateAction<any[]>>
  metaCommision: DefaultMetaProps
  setMetaCommision: Dispatch<SetStateAction<DefaultMetaProps>>
  meta: DefaultMetaProps
  professionalOS: OrderPropsProfessional[]
  isLoading: boolean
  paginate: {
    current_page: number
    last_page: number
    setCurrent_page(page: number): void
  }
  navigateTo(url: string): void
  handleSearch(text: string): void
  handleOrder(field: string): void
  handleCheckedAll(): void
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
  name: string
  professional_id: number
  companies_id: number
  commission: number
  isCommission: boolean
}

export interface OrderPropsProfessional {
  professional_id: number
  id: number
  name: string
  commissionHave?: number
  company_id: number
  commission: boolean
  companies: {
    id: number
    razao_social: string
  }
  extrahour_release: Release[]
  fixed_payment_value: number
  extra_hour_value: number
  razao_social: string
  hour_quantity: number
  professional_data: {
    cnpj: string
    id: number
    name: string
  }
  userCompanies: UserCompanies[]
  total: number
}
export interface UserCompanies {
  id: number
  razao_social: string
  cnpj: string
}

export interface Release {
  user_id: number
  end_date: string
  extra_hours_status_id: number
  hour_quantity: number
  justification: string
  launch_date: string
  project_id: string
  type: string
}
