import { IPermissions } from 'components/molecules'
import { OPTIONS } from 'components/molecules'

interface ILocalStorageProps {
  avatar: string
  name: string
  permissions: number[]
  user_type_id: number
}

export const usePermission = () => {
  const data: ILocalStorageProps = JSON.parse(
    localStorage.getItem('@UbiRH/USER') as string
  )

  const Licence: IPermissions[] = []

  if (data === null) window.location.href = '/'

  Object.entries(OPTIONS[0]).forEach(([property, value]) => {
    for (let i = 0; i <= data.permissions.length - 1; i++) {
      if (data.permissions[i] === Number(property)) {
        Licence.push(value)
      }
    }
  })

  return { Licence }
}
