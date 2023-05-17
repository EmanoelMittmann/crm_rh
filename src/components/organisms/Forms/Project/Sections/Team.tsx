import { useFormContext } from 'react-hook-form'

import { Selects, Inputs } from 'components/atoms'
import { ButtonGeneric } from 'components/atoms/ButtonGeneric'
import { Table } from 'components/organisms/Tables'

import { ContainerRow } from '../style'
import { FormProjectProps, TeamMemberProps } from '../types'

export const Team = () => {
  const {
    register,
    watch,
    setValue,
    getValues,
    formState: { errors }
  } = useFormContext<FormProjectProps>()

  const options = watch('options')

  const handleTeam = () => {
    const professional = watch('professional')
    const id = watch('usersProjects.user_id')
    const avatar = watch('professional.avatar')
    const jobs = watch('jobs')
    const hours_mounths_estimated = watch(
      'usersProjects.hours_mounths_estimated'
    )
    const extra_hours_estimated = watch(
      'usersProjects.extra_hours_estimated'
    )
    const hours_mounths_performed = watch(
      'usersProjects.hours_mounths_performed'
    )
    const extra_hours_performed = watch(
      'usersProjects.extra_hours_performed'
    )
    const status = watch('professional.status')

    if (professional && jobs) {
      const newTeamMember = {
        user_id: id,
        professional,
        jobs,
        extra_hours_estimated: Number(
          watch('usersProjects.extra_hours_estimated')
        ),
        hours_mounths_estimated: Number(
          watch('usersProjects.hours_mounths_estimated')
        ),
        extra_hours_performed: null,
        hours_mounths_performed: null,
        status: { label: status ? status : 'Ativo' },
        avatar: avatar
          ? avatar
          : 'https://www.fiscalti.com.br/wp-content/uploads/2021/02/default-user-image.png'
      } as unknown as TeamMemberProps

      const currentTeam = getValues('team') || []
      const newTeam = [...currentTeam, newTeamMember]

      setValue('team', newTeam)
    }
  }

  return (
    <>
      <ContainerRow>
        <h3>Time</h3>
      </ContainerRow>
      <ContainerRow gap='1rem'>
        <Selects.Default
          {...register('professional.name', {})}
          onSelect={(value: any) =>
            setValue('professional.name', value, {
              shouldValidate: true
            })
          }
          onClear={() => setValue('professional.name', null)}
          options={options?.professionals}
          label='Time'
          placeholder='Selecione'
          width={190}
        />
        <Selects.Default
          {...register('jobs.name', {})}
          onSelect={(value: any) =>
            setValue('jobs.name', value, { shouldValidate: true })
          }
          onClear={() => setValue('jobs.name', null)}
          options={options?.jobs}
          label='Cargo'
          placeholder='Selecione'
          width={190}
        />
        <Inputs.Default
          {...register('usersProjects.hours_mounths_estimated', {
            required: true
          })}
          error={
            errors?.usersProjects?.hours_mounths_estimated?.message
          }
          label='Horas/mês estimadas'
          placeholder='Horas'
          width={175}
        />
        <Inputs.Default
          {...register('usersProjects.extra_hours_estimated', {
            required: true
          })}
          error={
            errors?.usersProjects?.extra_hours_estimated?.message
          }
          label='Horas extras estimadas'
          placeholder='Horas'
          width={175}
        />
        <ButtonGeneric
          top='1em'
          Text='Vincular'
          bgColor='#0D2551'
          color='white'
          width='11em'
          bRadius='500px'
          height='3.5em'
          type='button'
          onClick={handleTeam}
        />
      </ContainerRow>
      <ContainerRow>
        <Table.ProjectTeam />
      </ContainerRow>
    </>
  )
}
