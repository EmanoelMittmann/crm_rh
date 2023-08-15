import { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { useParams } from 'react-router-dom'

import { toast, DatePicker } from '@stardust-ds/react'

import { Selects, Inputs, SelectOption } from 'components/atoms'
import { ButtonGeneric } from 'components/atoms/ButtonGeneric'
import { ContainerRow } from 'components/organisms/Forms/Project/style'
import { Table } from 'components/organisms/Tables'

import {
  bindUserAtProject,
  convertDateFormat,
  handleTeam
} from './logic'
import { FormTeamProps, TeamMemberProps } from './types'

export const Team = () => {
  const { register, watch, setValue, ...props } =
    useFormContext<FormTeamProps>()
  const {
    formState: { errors }
  } = props

  const [inputValues, setInputValues] = useState({
    hoursMonth: '',
    extraHour: ''
  })

  const { id } = useParams()
  const job = watch('jobs.name.label')
  const options = watch('options')

  const teamUser = watch('team', [])
  let newTime = teamUser
  const listUsers = watch('options.professionals', [])
  // const currentTeamOptions = listUsers.filter(
  //   (professional) =>
  //     !teamUser.find(
  //       (user) => user.user_id === Number(professional.value)
  //     )
  // )

  const TechLead = teamUser.filter(
    (obj) =>
      obj.job_ === 'Tech Lead' ||
      obj.job_ === 'Tech Lead e Desenvolvedor'
  )

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
          options={listUsers}
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
          onClick={() =>
            handleTeam(
              {
                register,
                watch,
                setValue,
                ...props
              },
              Number(id)
            )
          }
        />
      </ContainerRow>
      <ContainerRow>
        <Table.Team />
      </ContainerRow>
    </>
  )
}
