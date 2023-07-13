import { DetailsProfessional } from 'contexts/List/Hours/Techlead/types'

export interface IHandleTechLead {
  open(): void
  close(): void
}

export const Options = [
  { label: 'Aceito', value: '1' },
  { label: 'Recusado', value: '0' }
]
