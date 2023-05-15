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

interface FormProjects {
  name?: string
  date_start?: string
  date_end?: string
  date_end_performed?: string
  project_status_id?: number
  project_type_id?: number
  team_cost?: string
  id?: string
  date_start_performed?: string
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

interface IProjectsListing
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  projects?: string | number | boolean | undefined
  name?: string | number
  date_start?: staring
  status?: string | number | undefined
  project_type?: string | number | undefined
  color: string
  button_color: string
  text_color: string
}

interface CNPJValidatorResponse {
  cnpj: string
  razao_social: string
  nome_fantasia: string
  ddd_telefone_1: string
  cep: number
  descricao_tipo_de_logradouro: string
  logradouro: string
  numero: string
  complemento: string
  bairro: string
  municipio: string
  uf: string
}
