import { createContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { toast } from '@stardust-ds/react'

import { TeamMemberProps } from 'components/organisms/Forms/Project/types'

import api from 'api'
import { routes } from 'routes'

import { useDebounce } from 'hooks'

import { ProfessionalProps } from '../Professional/types'
import { ContextTeamProps, ReactNode } from './types'
import { ProjectProps } from 'types'

export const Context = createContext({} as ContextTeamProps)
export const Provider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [projects, setProjects] = useState<ProjectProps[]>([])
  const [team, setTeam] = useState<TeamMemberProps[]>([])
  const [professional, setProfessional] = useState<
    ProfessionalProps[]
  >([])

  const { id } = useParams()
  const Team = team
  const project_id = id

  const fetchUsers = async (project_id: number) => {
    try {
      const response = await api.get(
        routes.project.updateProject(project_id)
      )
      setTeam(response.data.users)
    } catch (error) {
      console.error(error)
    }
  }

  const contextProjectProps = {
    team,
    projects,
    professional,
    isLoading,
    navigateTo,
    handleOrder,
    handleUpdateUser,
    fetchUsers,
    removeUser,
    bindUserAtProject
  }

  async function bindUserAtProject(
    id: number,
    payload: TeamMemberProps
  ) {
    try {
      await api.post(routes.project.userProjects(id), payload)
      toast({
        type: 'success',
        title: 'Sucesso',
        description: 'Profissional adicionado com sucesso',
        position: 'bottom-right'
      })
    } catch (error: any) {
      return toast({
        type: 'warning',
        title: 'Atenção',
        description: error.response.data.message,
        position: 'bottom-right'
      })
    }
    fetchUsers(id)
  }

  async function fetchProfessionalData() {
    try {
      const response = await api.get(
        routes.professional.list + '?limit=1000'
      )
      setProfessional(response?.data.data)
    } catch (error) {
      console.log(error)
    }
  }

  async function handleUpdateUser(
    user_id: number,
    user_projects_id: number,
    data: any
  ) {
    try {
      if (project_id) {
        const updatedTeam = [...team]
        const index = team.findIndex(
          (item) => item.user_projects_id === user_projects_id
        )

        if (index !== -1) {
          const updatedUser = {
            ...updatedTeam[index],
            user_id: user_id,
            user_projects_id: data.user_projects_id,
            hours_mounths_estimated: data.hours_mounths_estimated,
            extra_hours_estimated: data.extra_hours_estimated,
            extra_hours_performed: data.extra_hours_performed,
            hours_mounths_performed: data.hours_mounths_performed,
            date_start_allocation: data.date_start_allocation,
            date_end_allocation: data.date_end_allocation,
            status: data.status,
            job_: data.job_,
            job_id: data.job_id,
            isTechLead: data.isTechLead
          }

          updatedTeam[index] = updatedUser as any
          setTeam(updatedTeam)
          const editTeam = routes.project.userProjects(
            Number(project_id)
          )
          const update = {
            user_id: user_id,
            user_projects_id: data.user_projects_id,
            hours_mounths_estimated: data.hours_mounths_estimated,
            extra_hours_estimated: data.extra_hours_estimated,
            extra_hours_performed: data.extra_hours_performed,
            hours_mounths_performed: data.hours_mounths_performed,
            date_start_allocation: data.date_start_allocation,
            date_end_allocation: data.date_end_allocation,
            status: data.status,
            job_: data.job_,
            job_id: data.job_.id,
            isTechLead: data.isTechLead
          }
          setTeam(updatedTeam)
          await api.put(editTeam, update)

          toast({
            type: 'success',
            title: 'Atualização do Time de projeto',
            description: 'Profissional atualizado com sucesso',
            position: 'bottom-right'
          })
        }
      }
    } catch (err) {
      toast({
        type: 'error',
        title: 'Erro ao atualizar profissional',
        description: 'Tente novamente mais tarde',
        position: 'bottom-right'
      })
      fetchUsers(Number(project_id))
    }
  }

  function removeUser(user_projects_id: number, user_id: number) {
    if (project_id) {
      api.delete(routes.project.userProjects(Number(project_id)), {
        data: { user_projects_id, user_id }
      })
    }
    const indexToRemove = Team.findIndex(
      (item) => item.user_projects_id === user_projects_id
    )
    if (indexToRemove !== -1) {
      const newTeam = [...Team]
      newTeam.splice(indexToRemove, 1)
      setTeam(newTeam)

      toast({
        title: 'Removendo profissional da equipe',
        description: 'Profissional removido com sucesso',
        type: 'success',
        position: 'bottom-right'
      })
    } else {
      toast({
        title: 'Removendo profissional da equipe',
        description: 'Erro ao remover profissional',
        type: 'error',
        position: 'bottom-right'
      })
      fetchUsers(Number(project_id))
    }
  }

  function handleOrder(field: string) {}

  function navigateTo(url: string) {
    navigate(url)
  }

  useDebounce({
    fn: fetchProfessionalData,
    delay: 0,
    listener: []
  })

  return (
    <Context.Provider value={contextProjectProps}>
      {children}
    </Context.Provider>
  )
}
