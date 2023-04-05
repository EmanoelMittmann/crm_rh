import type { TemplateProps } from '../types'


interface OptionsProps {
  label: string
  callback: () => void
}

interface ConfigProps extends TemplateProps {
  options: OptionsProps[]
}

export interface ProfessionalProps {
  id: number
  avatar: string
  name: string
  job: { name: string }
  email: string
  telephone_number: string
  city_name: string
  is_active: boolean
}

export type ShelfProps = {
  props: ProfessionalProps
  config: ConfigProps
}



