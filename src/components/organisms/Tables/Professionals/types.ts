import type { TemplateProps } from '../types'

export interface ProfessionalProps {
  avatar: string
  name: string
  company: string
  email: string
  phone: string
  address: string
  status: boolean
}

export type ShelfProps = TemplateProps & ProfessionalProps
