import Professional, { FormProps as ProfessionalProps } from './Professional'
import Project, {FormProjectProps as ProjectProps} from './Project'

export const Form = Object.assign({}, { Professional, Project  })

export type FormProps = {
  Professional: ProfessionalProps
  Project: ProjectProps

}

export { getUfOption } from './Professional'
