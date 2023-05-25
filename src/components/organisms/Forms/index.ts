import Company, { FormProps as CompanyProps } from './Company'
import Professional, {
  FormProps as ProfessionalProps
} from './Professional'
import Project, { FormProjectProps as ProjectProps } from './Project'

export const Form = Object.assign(
  {},
  { Professional, Project, Company }
)

export type FormProps = {
  Company: CompanyProps
  Professional: ProfessionalProps
}

export type FormProjectProps = {
  Project: ProjectProps
}

export { getUfOption } from './Professional'
