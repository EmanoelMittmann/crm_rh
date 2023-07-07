import { Option } from 'types'

export interface IModalProps {
  text: string
  placeholder: string
  EventOne: (
    user_id: number,
    user_name: string,
    project_name: string
  ) => void
  defaultOpened?: boolean
}

export interface IHandleModalPropsExtrasHoursRh {
  open(user_id: number, user_name: string, project_name: string): void
  close(): void
}
