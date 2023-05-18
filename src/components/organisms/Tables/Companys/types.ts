import type { TemplateProps } from '../types'

interface OptionsProps {
  label: string
  callback(): void
}

interface ConfigProps extends TemplateProps {
  options: OptionsProps[]
}

export interface CompanyProps {
  id: number
  razao_social: string
  cnpj: string
  opening_date: string
  city_name: string
  type_company: string
  uf: string
  registration_status: string
}

export type ShelfProps = {
  props: CompanyProps
  config: ConfigProps
}
