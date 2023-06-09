import { UseFormReturn } from 'react-hook-form'
import { useParams } from 'react-router-dom'

import { toast } from '@stardust-ds/react'

import { FormTeamProps } from 'components/organisms/Forms/Project'

import api from 'api'
import { routes } from 'routes'

export async function fetchPropsTeam(
  user_id: number,
  data: any,
  methods: UseFormReturn<FormTeamProps['team']>
) {
  const { watch } = methods
  const team = watch() || []
  const { id } = useParams()
  const project_id = id || 0

  try {
    if (project_id) {
      const updatedTeam = [...team]
      const index = team.findIndex((item) => item.user_id === user_id)
      if (index !== -1) {
        const updatedUser = {
          ...updatedTeam[index],
          user_id: user_id,
          hours_mounths_estimated: data.hours_mounths_estimated,
          extra_hours_estimated: data.extra_hours_estimated,
          extra_hours_performed: data.extra_hours_performed,
          hours_mounths_performed: data.hours_mounths_performed,
          status: data.status,
          job_: data.job_,
          isTechLead: data.isTechLead
        }

        updatedTeam[index] = updatedUser
        // methods.setValue('team', updatedTeam)

        console.log('updatedTeam: ', updatedTeam)

        const editTeam = routes.project.userProjects(
          Number(project_id)
        )
        const update = {
          user_id: user_id,
          hours_mounths_estimated: data.hours_mounths_estimated,
          extra_hours_estimated: data.extra_hours_estimated,
          hours_mounths_performed: data.hours_mounths_performed,
          status: data.status,
          job_: data.job_,
          isTechLead: data.isTechLead
        }
        await api.put(editTeam, update)
      }
    }

    toast.success({
      title: 'Profissional atualizado com sucesso'
    })
  } catch (err) {
    toast.error({
      title: 'Erro ao atualizar profissional'
    })
  }
}

export async function fetchRemoveTeam(
  user_id: number,
  methods: UseFormReturn<FormTeamProps['team']>
) {
  const { watch } = methods
  const team = watch() || []
  const { id } = useParams()
  const project_id = id || 0

  if (project_id) {
    api.delete(routes.project.userProjects(Number(project_id)), {
      data: { user_id }
    })
  }
  const newTeam = team.filter((item) => item.user_id !== user_id)

  // methods.setValue(newTeam, team || [])
  toast({
    title: 'Profissional removido com sucesso',
    type: 'success'
  })
}
