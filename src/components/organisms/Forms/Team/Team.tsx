import { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { useParams } from 'react-router-dom'

import { toast, DatePicker } from '@stardust-ds/react'

import { Selects, Inputs, SelectOption } from 'components/atoms'
import { ButtonGeneric } from 'components/atoms/ButtonGeneric'
import { ContainerRow } from 'components/organisms/Forms/Project/style'
import { Table } from 'components/organisms/Tables'

import api from 'api'
import { routes } from 'routes'

import { FormTeamProps, TeamMemberProps } from './types'

export const Team = () => {
  const {
    register,
    watch,
    setValue,
    getValues,
    setError,
    formState: { errors }
  } = useFormContext<FormTeamProps>()

  const [isTechLead, setIsTechLead] = useState(false)
  const [inputValues, setInputValues] = useState({
    hoursMonth: '',
    extraHour: ''
  })

  const { id } = useParams()
  const job = watch('jobs.name.label')
  const options = watch('options')
  const projectId = id

  const handleTeam = async () => {
    const professional = watch('professional')
    const id = Number(watch('professional.name.value'))
    const avatar = watch('professional.avatar.label')
    const job = watch('jobs')
    const job_ = watch('jobs.name.label')
    const status = watch('users.status')
    const hoursMonth =
      Number(watch('users.hours_mounths_estimated')) || 0
    const extraHour =
      Number(watch('users.extra_hours_estimated')) || 0
    const hours_mounths_performed =
      Number(watch('users.hours_mounths_performed')) || 0
    const extra_hours_performed =
      Number(watch('users.extra_hours_performed')) || 0
    const techLead = watch('users.isTechLead')

    if (professional && job) {
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
      if (!job.name) {
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
        user_id: id,
        professional,
        job,
        job_: isTechLead ? 'Tech Lead' : job_,
        isTechLead: techLead,
        extra_hours_estimated: extraHour,
        hours_mounths_estimated: hoursMonth,
        hours_mounths_performed: hours_mounths_performed,
        extra_hours_performed: extra_hours_performed,
        status: status ? 'Ativo' : 'Inativo',
        avatar: avatar
          ? avatar
          : 'https://www.fiscalti.com.br/wp-content/uploads/2021/02/default-user-image.png'
      } as unknown as TeamMemberProps

      const currentTeam = getValues('team') || []
      const newTeam = [...currentTeam, newTeamMember]

      if (projectId !== undefined) {
        await api.post(
          routes.project.userProjects(Number(projectId)),
          newTeamMember
        )
        setValue('team', newTeam)
        toast({
          title: 'Profissional adicionado com sucesso!',
          type: 'success',
          position: 'bottom-right'
        })
        return
      }

      setValue('team', newTeam)
      toast({
        title: 'Profissional cadastrado com sucesso!',
        type: 'success',
        position: 'bottom-right'
      })

      setInputValues({
        hoursMonth: '',
        extraHour: ''
      })
    }
  }

  const teamUser = watch('team', [])
  const listUsers = watch('options.professionals', [])
  const currentTeamOptions = listUsers.filter(
    (professional) =>
      !teamUser.find(
        (user) => user.user_id === Number(professional.value)
      )
  )

  const TechLead = teamUser.filter(
    (obj) =>
      obj.job_ === 'Tech Lead' ||
      obj.job_ === 'Tech Lead e Desenvolvedor'
  )
  let newTime = teamUser
  if (
    (TechLead[0] && job === 'Tech Lead') ||
    (TechLead[0] && job === 'Tech Lead e Desenvolvedor')
  ) {
    newTime = teamUser.filter(
      (obj) =>
        obj.job_ !== 'Tech Lead' &&
        obj.job_ !== 'Tech Lead e Desenvolvedor'
    )
  }

  return (
    <>
      <ContainerRow>
        <h3>Time</h3>
      </ContainerRow>

      <ContainerRow gap='1em' align='center'>
        <Selects.Default
          {...register('professional.name', {})}
          onSelect={(value: any) =>
            setValue('professional.name', value, {
              shouldValidate: true
            })
          }
          error={errors?.professional?.name?.message}
          onClear={() => setValue('professional.name', null)}
          options={currentTeamOptions as SelectOption[]}
          label='Time'
          placeholder='Selecione'
          width={180}
          height={60}
        />
        <Selects.Default
          {...register('jobs.name', {})}
          onSelect={(value: any) =>
            setValue('jobs.name', value, { shouldValidate: true })
          }
          error={errors?.jobs?.name?.message}
          onClear={() => setValue('jobs.name', null)}
          options={options?.jobs as SelectOption[]}
          label='Cargo'
          placeholder='Selecione'
          width={180}
          height={60}
        />
        <Inputs.Default
          {...register('users.hours_mounths_estimated', {})}
          value={inputValues.hoursMonth}
          onChange={(e) =>
            setInputValues({
              ...inputValues,
              hoursMonth: e.target.value
            })
          }
          error={errors?.users?.hours_mounths_estimated?.message}
          label='Horas/mês estimadas'
          placeholder='Horas'
          width='300px'
          height={40}
        />
        <DatePicker
          inputStartProps={{
            pTop: 'quark',
            placeholder: 'Inicio da Alocação',
            label: 'Data de Inicio da Alocação',
            height: 66,
            width: '195px'
          }}
        />
        <ButtonGeneric
          top='1.5em'
          Text='Vincular'
          bgColor='#0D2551'
          color='white'
          width='230px'
          bRadius='500px'
          height='3.5em'
          type='button'
          onClick={handleTeam}
        />
      </ContainerRow>
      <ContainerRow>
        <Table.Team />
      </ContainerRow>
    </>
  )
}
