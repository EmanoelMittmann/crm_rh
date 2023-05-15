export type ProjectPropsHours = {
  id: number
  name: string
  date_start: string //date
  extra_hours_estimated: number
  extra_hours_performed: number
  extra_hours_percent?: number
  hours_mounths_estimated: number
  hours_mounths_performed: number
  hours_mounths_percent?: number
}


export interface ProjectIProps {
  id: number
  name: string
  created_at: string
  date_start: string
  date_start_performed: string
  date_end: string
  date_end_performed: string
  project_status_id: number
  project_type_id: number
  project_type: { name: string }
  team_cost: string
  is_active: boolean
  status: {
    color: {
      button_color: string
      text_color: string
      name: string
    }
    name: string
  }
}
