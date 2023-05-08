import type { TemplateProps } from '../types'

interface OptionsProps {
  label: string
  callback(): void
}

interface ConfigProps extends TemplateProps {
  options: OptionsProps[]
}

export interface TypesProjectProps {
  id: number
  name: string
  is_active: boolean
}

export type ShelfProps = {
  props: TypesProjectProps
  config: ConfigProps
}
