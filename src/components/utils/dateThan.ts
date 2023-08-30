import { toast } from '@stardust-ds/react'

export function dateThan(firstDate: string, secondDate: string) {
  const INITIAL = new Date(firstDate)
  const END = new Date(secondDate)

  if (!firstDate || INITIAL > END) {
    toast({
      toastId: 1,
      type: 'warning',
      title: 'Aviso!',
      description:
        'a data final não pode ser menor que a data inicial',
      position: 'bottom-right'
    })
    return false
  }
  return true
}
