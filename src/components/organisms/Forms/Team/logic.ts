import { UseFormReturn } from 'react-hook-form'

import { toast } from '@stardust-ds/react'

import api from 'api'
import { routes } from 'routes'

import { FormTeamProps, TeamMemberProps } from './types'

export async function bindUserAtProject(
  id: number,
  payload: TeamMemberProps
) {
  try {
    await api.post(routes.project.userProjects(id), payload)
  } catch (error) {
    return toast({
      title: 'Error',
      position: 'bottom-right'
    })
  }
}

export function verifyFormat(date: string): boolean {
  const padrao = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/
  return padrao.test(date)
}

export function convertDateFormat(inputDate: string) {
  const months = {
    Jan: '01',
    Feb: '02',
    Mar: '03',
    Apr: '04',
    May: '05',
    Jun: '06',
    Jul: '07',
    Aug: '08',
    Sep: '09',
    Oct: '10',
    Nov: '11',
    Dec: '12'
  }

  type Month = typeof months

  const parts = inputDate.split(' ')
  if (parts[0] === 'undefined') return ''
  const partmonth = parts[1]

  const day = parts[2]
  const month = months[partmonth as keyof Month]
  const year = parts[3]

  return `${year}-${month}-${day}`
}

export function handleTeam(
  Context: UseFormReturn<FormTeamProps>,
  ProjectId: number
) {
  const {
    watch,
    setValue,
    getValues,
    setError,
    formState: { errors }
  } = Context

  const { jobs, users, professional } = watch()
  const { avatar } = professional
  const job_ = watch('jobs.name.label')
  const status = users.status
  const hoursMonth = users.hours_mounths_estimated || 0
  const techLead = users.isTechLead
  const job = jobs

  if (professional && jobs) {
    const validationToIncludeTeam = (errorMessage: string) => ({
      type: 'manual',
      message: errorMessage
    })

    if (!professional.name) {
      setError(
        'professional.name',
        validationToIncludeTeam(
          'Campo vazio, selecione um profissional!'
        )
      )
      return
    }
    if (!jobs.name) {
      setError(
        'jobs.name',
        validationToIncludeTeam('Campo vazio selecione um cargo!')
      )
      return
    }
    if (!hoursMonth || hoursMonth <= 0) {
      setError(
        'users.hours_mounths_estimated',
        validationToIncludeTeam(
          'O Campo Hora/ mês deve ser maior que 0!'
        )
      )
      return
    }

    const newTeamMember = {
      user_id: professional.name.value,
      professional,
      date_start_allocation: users.date_start_allocation,
      job,
      job_: techLead ? 'Tech Lead' : job_,
      isTechLead: techLead,
      extra_hours_estimated: users.extra_hours_estimated | 0,
      hours_mounths_estimated: hoursMonth,
      hours_mounths_performed: users.hours_mounths_performed | 0,
      extra_hours_performed: users.extra_hours_performed | 0,
      status: status ? 'Ativo' : 'Inativo',
      avatar: avatar
        ? avatar
        : 'https://www.fiscalti.com.br/wp-content/uploads/2021/02/default-user-image.png'
    } as unknown as TeamMemberProps

    const currentTeam = getValues('team') || []
    const newTeam = [...currentTeam, newTeamMember]

    if (ProjectId) {
      bindUserAtProject(Number(ProjectId), newTeamMember)
    }

    setValue('team', newTeam)
    toast({
      title: 'Profissional cadastrado com sucesso!',
      type: 'success',
      position: 'bottom-right'
    })
    setValue('professional.name', null)
    setValue('jobs.name', null)
    setValue('users.date_start_allocation', undefined)
    setValue('users.hours_mounths_estimated', null)
    return
  }
}
