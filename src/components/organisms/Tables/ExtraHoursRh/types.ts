import type { TemplateProps } from '../types'

interface OptionsProps {
  label: string
  callback: () => void
}

interface ConfigProps extends TemplateProps {
  options: OptionsProps[]
}

export interface ExtraHoursRh {
  type: string
  hour_quantity: number
  justification: string
  created_at: string
  updated_at: string
  user_id: number
  project_id: number
  extra_hours_status_id: number
  user: {
    id: number
    name: string
  }
  project: {
    id: number
    name: string
  }
  status: {
    id: number
    name: string
  }
}

export type ShelfProps = {
  props: ExtraHoursRh
  config: ConfigProps
}
