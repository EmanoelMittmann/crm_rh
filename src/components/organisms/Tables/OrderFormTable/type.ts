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
