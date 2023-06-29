import { UserCompanies } from './OrderFormTable/type'

export interface TemplateProps {
  template: string
}
export type ShelfProps<T> = {
  props: T
  config: ConfigProps
}

export type ShelfIProps<T> = {
  props: T
  config: ConfigProps
  orderData: OrderData
}

interface OptionsProps {
  label: string
  callback: () => void
}

interface ConfigProps extends TemplateProps {
  options: OptionsProps[]
}
export interface OrderData {
  professional_id: number
  companies_id: number
  commission: number
  name: string
  extra_hour_value: number
  fixed_payment_value: string
  companies: UserCompanies[]
  professional_data: {
    cnpj: string
  }
}
export interface CommissionProps {
  commission: number
}
