export interface TemplateProps {
  template: string
}
export type ShelfProps<T> = {
  props: T
  config: ConfigProps
}

interface OptionsProps {
  label: string
  callback: () => void
}

interface ConfigProps extends TemplateProps {
  options: OptionsProps[]
}
