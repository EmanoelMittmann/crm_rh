export interface HeaderProps {
  field: string 
  label: string
  on?: boolean
}

export interface TemplateProps {
  template: string
  handleOrder(field: string): void
  headers: HeaderProps[]
}
