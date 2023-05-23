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
    const id = watch('professional.name.value')
    const avatar = watch('professional.avatar.label')
    const jobs = watch('jobs')
    const status = watch('usersProjects.status')
    const hoursMonth = Number(watch('usersProjects.hours_mounths_estimated') ?? 0)
    const extraHour = Number(watch('usersProjects.extra_hours_estimated') ?? 0)
    const hours_mounths_performed = Number(watch('usersProjects.hours_mounths_performed') ?? 0)
    const extra_hours_performed = Number(watch('usersProjects.extra_hours_performed') ?? 0)
    const techLead = watch('usersProjects.isTechLead')
    if (professional && jobs) {
      const newTeamMember = {
        user_id: id,
        professional,
        jobs,
        hours_mounths_estimated: hoursMonth,
        extra_hours_estimated: extraHour,
        extra_hours_performed: extra_hours_performed,
        hours_mounths_performed: hours_mounths_performed,
        isTechLead: techLead,
        status: status? 0 : 1,
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
          options={watch('options.professionals')??[]}
          label='Time'
          placeholder='Selecione'
          value={watch('professional.name') as any}
          width={190}
        />
        <Selects.Default
          {...register('jobs.name', {})}
          onSelect={(value: any) =>
            setValue('jobs.name', value, { shouldValidate: true })
          }
          onClear={() => setValue('jobs.name', null)}
          options={watch('options.jobs')??[]}
          label='Cargo'
          placeholder='Selecione'
          value={watch('jobs.name') as any}
          width={190}
        />
        <Inputs.Default
          {...register('usersProjects.hours_mounths_estimated', {
            required: true
          })}
          error={errors.usersProjects?.hours_mounths_performed?.message}
          label='Horas/mês estimadas'
          placeholder='Horas'
          width={175}
        />
        <Inputs.Default
          {...register('usersProjects.extra_hours_estimated', {
            required: true
          })}
          error={errors.usersProjects?.extra_hours_performed?.message}
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
