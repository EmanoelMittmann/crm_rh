export interface HeaderProps {
  field: string
  label: string
  on?: boolean
  checked?: boolean
}

export interface TemplateProps {
  template: string
  handleOrder(field: string): void
  allProfessionalChecked?: boolean
  toggleCheckedAll?: (isChecked: boolean) => void
  onsubmit?(event: React.FormEvent<HTMLFormElement>): void
  headers: HeaderProps[]
}
