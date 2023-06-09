import { Option } from 'types'

export interface TeamUserProps {
  id: number
  job_: string
  job: string
  job_id: Option | null
  name: string
  isTechLead: boolean
  extra_hours_estimated: number
  hours_mounths_estimated: number
  hours_mounths_performed: number
  extra_hours_performed: number
  is_active: boolean
  avatar: string
  status: boolean
  jobs: {
    id: Option | null
    name: Option | null
  }
  professional: {
    id: Option | null
    name: Option | null
    status: boolean
    avatar: string
  }
}

export interface IModalProps {
  text: string
  placeholder: string
  EventOne: (
    _: number,
    name: string,
    status: string,
    project_type: string,
    date_start: string,
    date_end: string,
    date_end_performed: string,
    date_start_performed: string,
    team_cost: string
  ) => void
  defaultOpened?: boolean
}

export interface IHandleModalPropsDetails {
  open(
    id: number,
    name: string,
    status: string,
    project_type: string,
    date_start: string,
    date_end: string,
    date_end_performed: string,
    date_start_performed: string,
    team_cost: string
  ): void
  close(): void
}
