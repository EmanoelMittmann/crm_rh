import { toast } from '@stardust-ds/react'

import api from 'api'
import { routes } from 'routes'

import { TeamMemberProps } from './types'

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

  return `${day}/${month}/${year}`
}
