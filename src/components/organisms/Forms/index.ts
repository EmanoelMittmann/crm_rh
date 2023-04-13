import Professional, {
  FormProps as ProfessionalProps
} from './Professional'

export const Form = Object.assign({}, { Professional })

export type FormProps = {
  Professional: ProfessionalProps
}

export { getUfOption } from './Professional'
