export interface OrderProps {
  professional_id: number
  name: string
  extra_hour_value: number
  fixed_payment_value: string
  commission: number
  usersCompanies: UserCompanies[]
}

export interface CommissionItem {
  name: string
  professional_id: number
  companies_id: number
  extra_hour_value: number
  fixed_payment_value: string
  commission: number
  companies: UserCompanies[]
}
export interface Order {
  professional_id: number
  companies_id: number
  commission: number
}

export interface UserCompanies {
  companies_id: number
  razao_social: string
  cnpj: string
}
