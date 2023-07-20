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
  setAllProfessionalChecked?: React.Dispatch<
    React.SetStateAction<boolean>
  >
  onsubmit?(event: React.FormEvent<HTMLFormElement>): void
  headers: HeaderProps[]
}
