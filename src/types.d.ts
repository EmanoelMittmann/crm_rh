declare module '*.svg' {
  import { ReactElement, SVGProps } from 'react'
  const content: (props: SVGProps<SVGElement>) => ReactElement
  export default content
}

interface IContainerRowProps {
  paddingRight?: string
  paddingLeft?: string
  gap?: string
  align?: string
}

interface IContainerColumnProps {
  bottom?: string
  height?: string
  left?: string
  right?: string
  top?: string
  gap?: string
  justify?: string
  width?: string
}

interface IJWTDecodeGoogle {
  aud: string
  azp: string
  email: string
  email_verified: boolean
  exp: number
  family_name: string
  given_name: string
  hd: string
  iat: number
  iss: string
  jti: string
  name: string
  nbf: number
  picture: string
  sub: string
}

interface IButtonColorProps {
  bgColor?: string
  bgActive?: string
  bRadius?: string
  colorActive?: string
  color?: string
  top?: string
  fill?: fill
  left?: string
  fillActive?: string
  height?: string
  isActive?: boolean
  width?: string
  margin?: string
}

interface ISelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  placeholder?: string
  value?: Array
  width?: string
  label?: string
}

interface IModalProps {
  optionOne: string
  optionTwo?: string
  eventOne: MouseEventHandler
  eventTwo?: MouseEventHandler
}

export interface UserProjectsProps {
  id: number
  user_id: string
  extra_hours_estimated: string
  extra_hours_performed: string
  hours_mounths_estimated: string
  hours_mounths_performed: string
  avatar: string
  name: string
  status: string
  job_: string
  job_id: string
  job: {
    id: number
    name: string
  }
}

export interface ProjectProps {
  id: number
  name: string
  created_at: string
  date_start: string
  date_start_performed: string
  date_end: string
  date_end_performed: string
  project_status_id: number
  project_type: {
    id: string
    name: string
  }
  status: {
    color: {
      button_color: string
      text_color: string
      id: number
      name: string
    }
    id: number
    is_active: boolean
    colors_id: number
    created_at: Date
    updated_at: Date
    name: string
  }
  is_active: boolean
  team_cost: string
}

interface OtherProps {
  title?: string
}

interface MyFormProps {
  id: string
  initialTeam_cost: string
  initialType_id: number
  initiaStatus_id: number
  initiaPerformed: string
  initialDate_end: string
  initialDate_start: string
  initialName: string
  initialValues: string | number | boolean
}
interface Option {
  label: string
  value: string
}
