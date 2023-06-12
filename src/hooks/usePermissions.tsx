import { IPermissions } from 'components/molecules'
import { OPTIONS } from 'components/molecules'

interface ILocalStorageProps {
  avatar: string
  name: string
  permissions: number[]
  user_type_id: number
}

export const usePermission = () => {
  const { permissions: data }: ILocalStorageProps = JSON.parse(
    localStorage.getItem('@UbiRH/USER') as string
  )

  const Licence: IPermissions[] = []

  Object.entries(OPTIONS[0]).map(([property, value]) => {
    for (let i = 0; i <= data.length - 1; i++) {
      if (data[i] === Number(property)) {
        Licence.push(value)
      }
    }
  })

  return { Licence }
}