import { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { useParams } from 'react-router-dom'

import { toast, DatePicker } from '@stardust-ds/react'

import { Selects, Inputs, SelectOption } from 'components/atoms'
import { ButtonGeneric } from 'components/atoms/ButtonGeneric'
import { ContainerRow } from 'components/organisms/Forms/Project/style'
import { Table } from 'components/organisms/Tables'

import { bindUserAtProject, convertDateFormat } from './logic'
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
    const { jobs, users, professional } = watch()
    const { avatar } = professional
    const job_ = watch('jobs.name.label')
    const status = users.status
    const hoursMonth = users.hours_mounths_estimated | 0
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
        job_: isTechLead ? 'Tech Lead' : job_,
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

      if (projectId !== undefined) {
        bindUserAtProject(Number(projectId), newTeamMember)
      }

      setValue('team', newTeam)
      toast({
        title: 'Profissional cadastrado com sucesso!',
        type: 'success',
        position: 'bottom-right'
      })
    }
    setValue('professional.name', null)
    setValue('jobs.name', null)
    setValue('users.date_start_allocation', undefined)
    setValue('users.hours_mounths_estimated', 0)
    setInputValues({
      extraHour: '',
      hoursMonth: ''
    })
    return
  }

  const teamUser = watch('team', [])
  const listUsers = watch('options.professionals', [])
  

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
          {...register('professional.name')}
          value={watch('professional.name') as any}
          onSelect={(value: any) =>
            setValue('professional.name', value, {
              shouldValidate: true
            })
          }
          error={errors?.professional?.name?.message}
          onClear={() => setValue('professional.name', null)}
          options={listUsers as SelectOption[]}
          label='Time'
          placeholder='Selecione'
          width={180}
          height={60}
        />
        <Selects.Default
          {...register('jobs.name', {})}
          value={watch('jobs.name') as any}
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
          value={{
            start: watch('users.date_start_allocation'),
            end: watch('users.date_start_allocation')
          }}
          onChange={(e) =>
            setValue(
              'users.date_start_allocation',
              convertDateFormat(String(e[0]))
            )
          }
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
