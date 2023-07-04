export interface HeaderProps {
  field: string
  label: string
  on?: boolean
}

export interface TemplateProps {
  template: string
  handleOrder(field: string): void
  onsubmit?(event: React.FormEvent<HTMLFormElement>): void
  headers: HeaderProps[]
}
