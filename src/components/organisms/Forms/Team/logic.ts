import { UseFormReturn } from 'react-hook-form'

import { toast } from '@stardust-ds/react'

import api from 'api'
import { routes } from 'routes'

import { FormTeamProps, TeamMemberProps } from './types'

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

function verifyProfessional(
  context: UseFormReturn<FormTeamProps>,
  professional: TeamMemberProps | undefined
) {
  const { watch } = context
  const { team } = watch()

  if (!team) return true

  if (!professional) return false

  const Exist = team
    .filter((prop) => prop.user_id === professional.user_id)
    .find((prop) => prop.job_ === professional.job_)

  if (
    Exist?.date_end_allocation &&
    professional.date_start_allocation <= Exist.date_end_allocation
  ) {
    toast({
      type: 'warning',
      title: 'Aviso',
      description:
        'Os Profissionais ja alocados inativos, so podem ser alocados novamente mediante a uma data superior a atual',
      position: 'bottom-right'
    })
    return false
  }

  if (Exist && !Exist.date_end_allocation) {
    toast({
      type: 'warning',
      title: 'Aviso',
      description:
        'Os Profissionais ja alocados, só podem ser alocados novamente com cargos diferentes',
      position: 'bottom-right'
    })
    return false
  }

  return true
}
export const builderPayload = (
  Context: UseFormReturn<FormTeamProps>
) => {
  const { watch } = Context

  const { jobs, users, professional } = watch()
  const { avatar } = professional
  const job_ = watch('jobs.name.label')
  const status = users.status
  const hoursMonth = users.hours_mounths_estimated || 0
  const techLead = users.isTechLead
  const job = jobs

  if (professional.name != null) {
    const newTeamMember = {
      user_id: professional.name.value,
      user_project_id: users.user_project_id,
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

    return newTeamMember
  }
}

export async function handleTeam(
  Context: UseFormReturn<FormTeamProps>
) {
  const { watch, setValue, setError, clearErrors, getValues } =
    Context
  const { jobs, users, professional } = watch()
  const hoursMonth = users.hours_mounths_estimated || 0

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
    clearErrors()
    if (!jobs.name) {
      setError(
        'jobs.name',
        validationToIncludeTeam('Campo vazio selecione um cargo!')
      )
      return
    }
    clearErrors()
    if (!hoursMonth || hoursMonth <= 0) {
      setError(
        'users.hours_mounths_estimated',
        validationToIncludeTeam(
          'O Campo Hora/ mês deve ser maior que 0!'
        )
      )
      return
    }
    clearErrors()
    if (!users.date_start_allocation) {
      setError(
        'users.date_start_allocation',
        validationToIncludeTeam('Preencha o inicio de alocação')
      )
      return
    }
    clearErrors()

    const newTeamMember = builderPayload(Context)

    const currentTeam = getValues('team') || []

    if (verifyProfessional(Context, newTeamMember)) {
      const newTeam = [
        ...currentTeam,
        newTeamMember
      ] as TeamMemberProps[]

      setValue('team', newTeam)

      toast({
        title: 'Cadastro de profissional!',
        description: 'Profissional cadastrado com sucesso!',
        type: 'success',
        position: 'bottom-right'
      })
      return
    }
  }
  setValue('professional.name', null)
  setValue('jobs.name', null)
  setValue('users.date_start_allocation', undefined)
  setValue('users.hours_mounths_estimated', null)
  return
}

export const handleDeleteTeam = (
  Context: UseFormReturn<FormTeamProps>,
  payload: TeamMemberProps
) => {
  const { setValue, getValues } = Context
  const currentTeam = getValues('team') || []
  const newTeam = currentTeam.indexOf(payload)
  currentTeam.splice(newTeam, 1)
  const newTeamMember = [...currentTeam] as TeamMemberProps[]
  setValue('team', newTeamMember)
}
