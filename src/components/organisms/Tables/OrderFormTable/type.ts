export interface OrderProps {
  id: number
  name: string
  companies_id: string
  cnpj: string
  extra_hour_value: number
  fixed_payment_value: string
  commission: number
}

export interface CommissionItem {
  professional_id: number
  companies_id: number
  extra_hour_value: number
  commission: number
}
export interface Order {
  professional_id: number
  companies_id: number
  commission: number
}

