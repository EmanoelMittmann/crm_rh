export interface IModalProps {
  text: string
  placeholder: string
  EventOne: () => void
  defaultOpened?: boolean
}

export interface IHandleModalPropsExtrasHoursRh {
  open(): void
  close(): void
}

export const optionsApproval = [
  { label: 'Aceito', value: 'Aceito' },
  { label: 'Recusado', value: 'Recusado' }
]
