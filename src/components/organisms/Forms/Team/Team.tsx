import { ChangeEvent, useContext, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { useParams } from 'react-router-dom'

import { Flex } from '@stardust-ds/react'
import { List } from 'contexts'

import { Selects, Inputs, SelectOption } from 'components/atoms'
import { ButtonGeneric } from 'components/atoms/ButtonGeneric'
import { ContainerRow } from 'components/organisms/Forms/Project/style'
import { TODAY } from 'components/utils/dateNow'

import { builderPayload, handleTeam } from './logic'
import { FormTeamProps, TeamMemberProps } from './types'

export const Team = () => {
  const Context = useFormContext<FormTeamProps>()
  const {
    watch,
    setValue,
    register,
    formState: { errors }
  } = Context

  const { id } = useParams()
  const project_id = Number(id)

  const { professional, team, bindUserAtProject } = useContext(
    List.Team.Context
  )

  const listOfProfessionalOfTeam = professional
    .filter((item) => item.is_active === true)
    .map((item) => ({
      label: item.name,
      value: item.id
    }))

  const job = watch('jobs.name.label')
  const options = watch('options')
  const teamUser = team

  let newTime = teamUser

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

      <Flex gap='nano' align='flex-start' justify='space-between'>
        <Selects.Default
          {...register('professional.name')}
          value={watch('professional.name', null) as any}
          onSelect={(value: any) =>
            setValue('professional.name', value)
          }
          width={190}
          error={errors?.professional?.name?.message}
          onClear={() => setValue('professional.name', null)}
          options={listOfProfessionalOfTeam as any}
          label='Time'
          placeholder='Selecione'
        />
        <Selects.Default
          {...register('jobs.name')}
          onSelect={(value: any) => setValue('jobs.name', value)}
          error={errors?.jobs?.name?.message}
          onClear={() => setValue('jobs.name', null)}
          options={options?.jobs as SelectOption[]}
          label='Cargo'
          width={190}
          placeholder='Selecione'
        />
        <Inputs.Default
          {...register('users.hours_mounths_estimated')}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setValue(
              'users.hours_mounths_estimated',
              Number(e.target.value)
            )
          }
          width={170}
          type='number'
          error={errors?.users?.hours_mounths_estimated?.message}
          label='Horas/mês estimadas'
          placeholder='Horas'
        />
        <Inputs.Default
          {...register('users.date_start_allocation')}
          error={errors.users?.date_start_allocation?.message}
          label='Início da Alocação'
          max={TODAY}
          placeholder='Início da Alocação'
          type='date'
        />
        <ButtonGeneric
          top='1.3em'
          Text='Vincular'
          width='100%'
          bgColor='#0D2551'
          color='white'
          bRadius='500px'
          height='42px'
          type='button'
          onClick={() => {
            if (project_id) {
              return bindUserAtProject(
                project_id,
                builderPayload(Context) as TeamMemberProps
              )
            }
            handleTeam(Context)
          }}
        />
      </Flex>
    </>
  )
}
