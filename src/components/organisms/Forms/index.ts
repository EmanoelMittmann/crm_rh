import Company, { FormProps as CompanyProps } from './Company'
import Professional, {FormProps as ProfessionalProps} from './Professional'
import Project, { FormProjectProps as ProjectProps } from './Project'
import Team, { FormTeamProps as TeamProps } from './Project'



export const Form = Object.assign(
  {},
  { Professional, Project, Company, Team}
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


export { getUfOption } from './Professional'
