import Company, { FormProps as CompanyProps } from './Company'
import OrderOfService, {
  FormOrderProps as OrderOfServiceProps
} from './OrderOfService'
import Professional, {
  FormProps as ProfessionalProps
} from './Professional'
import Project, { FormProjectProps as ProjectProps } from './Project'
import Team, { FormTeamProps as TeamProps } from './Project'

export const Form = Object.assign(
  {},
  { Professional, Project, Company, Team, OrderOfService }
)

export type FormProps = {
  Company: CompanyProps
  Professional: ProfessionalProps
}

export type FormProjectProps = {
  Project: ProjectProps
}
export type FormTeamProps = {
  Team: TeamProps
}

export type PartialForm = {
  Company: CompanyProps
}

export type FormOrderProps = {
  OrderOfService: OrderOfServiceProps
}

export { getUfOption } from './Professional'
export { validationSchema as SchemaCompany } from './Company/logic'
