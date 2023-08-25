import { ChangeEvent, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { useParams } from 'react-router-dom'

import { Flex } from '@stardust-ds/react'

import { Selects, Inputs, SelectOption } from 'components/atoms'
import { ButtonGeneric } from 'components/atoms/ButtonGeneric'
import { ContainerRow } from 'components/organisms/Forms/Project/style'
import { Table } from 'components/organisms/Tables'

import api from 'api'
import { routes } from 'routes'

import { useDebounce } from 'hooks'

import { ProfessionalProps } from '../Professional/types'
import { handleTeam } from './logic'
import { FormTeamProps } from './types'
import { TODAY } from 'components/utils/dateNow'

export const Team = () => {
  const [professional, setProfessional] = useState<
    ProfessionalProps[]
  >([])
  const { register, watch, setValue, ...props } =
    useFormContext<FormTeamProps>()
  const {
    formState: { errors }
  } = props

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
  const listOfProfessionalOfTeam = professional
    .filter((item) => item.is_active === true)
    .map((item) => ({
      label: item.name,
      value: item.id
    }))

  useDebounce({
    fn: fetchProfessionalData,
    delay: 0,
    listener: []
  })

  const { id } = useParams()
  const job = watch('jobs.name.label')
  const options = watch('options')
  const teamUser = watch('team', [])

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
          width={180}
          {...register('users.date_start_allocation')}
          error={errors.users?.date_start_allocation?.message}
          label='Inicio da Alocação'
          max={TODAY}
          placeholder='Inicio Da Alocação'
          type='date'
        />
        <ButtonGeneric
          top='1.5em'
          Text='Vincular'
          width='120px'
          bgColor='#0D2551'
          color='white'
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
      </Flex>
      <ContainerRow>
        <Table.Team />
      </ContainerRow>
    </>
  )
}
