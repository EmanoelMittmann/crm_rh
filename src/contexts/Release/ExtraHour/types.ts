export interface ContextExtraHourProps {
  handleSendHours(): void
  handleGetDataFromInputs(): void
}

export interface ExtraHourProps {
  end_data: string
  extra_hours_status_id: number
  hour_quantity: string
  justification: string
  launch_date: string
  project_id: string
  type: string
}
