import { ReactNode, createContext, useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'

import { toast } from '@stardust-ds/react'
import { SelectOption } from '@stardust-ds/react/lib/esm/components/Select/interfaces'

import api from 'api'
import { routes } from 'routes'

import { useDebounce } from 'hooks'

import { ContextExtraHourProps, ExtraHourProps } from './types'
import { ProjectProps } from 'types'

export const Context = createContext({} as ContextExtraHourProps)

export const Provider = ({ children }: { children: ReactNode }) => {
  const [projects, setProjects] = useState<SelectOption[]>([])

  const methods = useForm<ExtraHourProps>({
    defaultValues: {
      type: 'BY_DATE',
      extra_hours_status_id: 1
    }
  })
  const contextProps = {
    handleSendHours,
    projects,
    methods
  }

  async function fetchProjectUser() {
    const { data } = await api.get(routes.projectUsers.list)
    setProjects(
      data.map((project: ProjectProps) => ({
        value: project.id,
        label: project.name
      }))
    )
  }

  async function handleSendHours(data: ExtraHourProps) {
    try {
      await api.post(routes.hours.Professional.list, data)
      return toast({
        type: 'success',
        title: 'Horas Enviadas com sucesso',
        position: 'bottom-right'
      })
    } catch (error: any) {
      return toast({
        type: 'error',
        title: 'Error',
        description: error.response.data.message,
        position: 'bottom-right'
      })
    }
  }

  useDebounce({
    fn: fetchProjectUser,
    listener: []
  })

  return (
    <Context.Provider value={contextProps}>
      <FormProvider {...methods}>{children}</FormProvider>
    </Context.Provider>
  )
}
