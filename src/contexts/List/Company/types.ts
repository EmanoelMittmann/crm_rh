import { SelectProps } from '@stardust-ds/react'

export interface DefaultMetaProps {
  cnpj: string
  cityName: string
  search: string
  typeCompany: string
  uf: string
  registrationStatus: string
  orderField: string
  order: 'ASC' | 'DESC'
  referencesDate: string
  razaoSocial: string
  paginate: {
    current_page: number
    last_page: number
  }
}

export interface ContextCompanyProps {
  meta: DefaultMetaProps
  companys: CompanyProps[]
  isLoading: boolean
  filterOptions: {
    typeCompany: SelectProps['options']
    registration: SelectProps['options']
    uf: SelectProps['options']
  }
  paginate: {
    current_page: number
    last_page: number
    setCurrent_page(page: number): void
  }
  handleSearch(text: string): void
  handleOrder(field: string): void
  handleUpdateStatus(id: number): void
  handleDateReference(date: string): void
  handleUf(uf: string | null): void
  handleRegistration(status: string | null): void
  handleTypeCompany(type: string | null): void
}

export interface CompanyProps {
  id: number
  razao_social: string
  cnpj: string
  opening_date: string
  city_name: string
  uf: string
  registration_status: string
  type_company: string
}
