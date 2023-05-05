import { useFormContext } from 'react-hook-form'
import { Selects, Inputs } from 'components/atoms'
import { ButtonGeneric } from 'components/atoms/ButtonGeneric'
import { ProjectTeam } from '../projectTeam'
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
    const professional = watch('professional');
    const id = watch('options.professionals');
    const avatar = watch('professional.avatar.label');
    const jobs = watch('jobs');
    const hours_mounths_estimated = watch('user_projects.hours_mounths_estimated');
    const extra_hours_estimated = watch('user_projects.extra_hours_estimated');
    const hours_mounths_performed = watch('user_projects.hours_mounths_performed');
    const extra_hours_performed = watch('user_projects.extra_hours_performed');
    const status = watch(professional.status)

    if (professional && jobs) {
      const newTeamMember = {
        id: id ? id : 0,
        professional,
        jobs,
        hours_mounths_estimated,
        extra_hours_estimated,
        hours_mounths_performed: hours_mounths_performed ? hours_mounths_performed : 0,
        extra_hours_performed: extra_hours_performed ? extra_hours_performed : 0,
        status,
        avatar: avatar ? avatar : 'https://www.fiscalti.com.br/wp-content/uploads/2021/02/default-user-image.png'
      } as unknown as TeamMemberProps;

      const currentTeam = getValues('team') || [];
      const newTeam = [...currentTeam, newTeamMember];

      setValue('team', newTeam);
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
            setValue('professional.name', value, { shouldValidate: true })
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
          {...register('user_projects.hours_mounths_estimated')}
          label='Horas/mês estimadas'
          placeholder='Horas/mês'
          width={175}
        />
        <Inputs.Default
          {...register('user_projects.extra_hours_estimated')}
          label='Horas extras estimadas'
          placeholder='Horas extras'
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
      <ContainerRow gap="1rem">
        <ProjectTeam />
      </ContainerRow>
    </>
  )
}
