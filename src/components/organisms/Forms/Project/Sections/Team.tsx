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
    formState: { errors }
  } = useFormContext<FormProjectProps>()

  const options = watch('options')
  const team = watch('team')

  const handleTeam = () => {
    const professional = watch('professional')
    const job = watch('jobs')
    const hours_mounths_estimated = watch(
      'user_projects.hours_mounths_estimated'
    )
    const extra_hours_estimated = watch(
      'user_projects.extra_hours_estimated'
    )

    if (professional && job) {
      const teamMember = {
        professionals: {
          id: professional.id,
          name: professional.name
        },
        jobs: {
          id: job.id,
          name: job.name
        },
        hours_mounths_estimated,
        extra_hours_estimated
      } as TeamMemberProps

      setValue('team', [...team, teamMember])

      console.log('teamMember: ', teamMember.name)
    }
  }

  return (
    <>
      <form>
        <ContainerRow>
          <h3>Time</h3>
        </ContainerRow>
        <ContainerRow gap='1rem'>
          <Selects.Default
            {...register('professional', {})}
            onSelect={(value: any) =>
              setValue('professional', value, {
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
            {...register('jobs', {})}
            onSelect={(value: any) =>
              setValue('jobs', value, { shouldValidate: true })
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
        <ContainerRow>
          <ProjectTeam />
        </ContainerRow>
      </form>
    </>
  )
}
