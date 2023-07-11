import { UseFormReturn } from 'react-hook-form'

import { SelectProps } from '@stardust-ds/react'

import { SelectOption } from 'components/organisms/Forms/Project/types'
export interface ContextExtraHourProps {
  handleSendHours(data: ExtraHourProps): void
  projects: SelectOption[]
  methods: any
}

export interface ExtraHourProps {
  end_date?: string
  extra_hours_status_id: number
  hour_quantity: number
  justification?: string
  launch_date?: string
  project_id?: string
  type: string
}
