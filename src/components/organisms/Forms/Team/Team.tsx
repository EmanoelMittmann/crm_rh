import { useFormContext } from 'react-hook-form'
import { Selects, Inputs, SelectOption } from 'components/atoms'
import { ButtonGeneric } from 'components/atoms/ButtonGeneric'
import { ContainerRow } from 'components/organisms/Forms/Project/style'
import { Table } from 'components/organisms/Tables'
import api from 'api'
import { routes } from 'routes'
import { toast } from '@stardust-ds/react'
import { FormTeamProps, TeamMemberProps } from './types'


export const Team = () => {
  const {
    register,
    watch,
    setValue,
    getValues,
    setError,
    formState: { errors }
  } = useFormContext<FormTeamProps>();

  const options = watch('options')
  const projectId = watch('id')


  const handleTeam = async () => {
    const professional = watch('professional')
    const id = Number(watch('professional.name.value'))
    const avatar = watch('professional.avatar.label')
    const jobs = watch('jobs')
    const status = watch('users.status')
    const hoursMonth = Number(watch('users.hours_mounths_estimated')) || 0
    const extraHour = Number(watch('users.extra_hours_estimated')) || 0
    const hours_mounths_performed = Number(watch('users.hours_mounths_performed')) || 0
    const extra_hours_performed = Number(watch('users.extra_hours_performed')) || 0
    const techLead = watch('users.isTechLead')


    if (professional && jobs) {
      
      if (!professional.name) {
        setError('professional.name', {
          type: 'manual',
          message: 'Campo vazio, selecione um profissional!'
        });
        return;
      }
      if (!jobs.name) {
        setError('jobs.name', {
          type: 'manual',
          message: 'O Campo vazio selecione um cargo!'
        });
        return;
      }
      if (!hoursMonth || hoursMonth <= 0) {
        setError('users.hours_mounths_estimated', {
          type: 'manual',
          message: 'O Campo Hora/ mês deve ser maior que 0!'
        });
        return;
      }
    
      const newTeamMember = {
        user_id: id,
        professional,
        jobs,
        isTechLead: techLead,
        extra_hours_estimated: extraHour,
        hours_mounths_estimated: hoursMonth,
        hours_mounths_performed: hours_mounths_performed,
        extra_hours_performed: extra_hours_performed,
        is_active: true,
        avatar: avatar
          ? avatar
          : 'https://www.fiscalti.com.br/wp-content/uploads/2021/02/default-user-image.png',
        status: status ? false : true
      } as unknown as TeamMemberProps

      const currentTeam = getValues('team') || []
      const newTeam = [...currentTeam, newTeamMember]

      if (projectId) {
        await api.post(routes.project.userProjects(Number(projectId)), newTeamMember);
        setValue('team', newTeam);
        toast({
          title: "Profissional adicionado com sucesso!",
          type: 'success',
        })

        return;
      }

      setValue('team', newTeam);
      toast({
        title: "Profissional cadastrado com sucesso!",
        type: 'success',
      })
    }

  }

  const teamUser = watch('team', [])
  const listUsers = watch('options.professionals', [])
  const currentTeamOptions = listUsers.filter((professional) => {
    if (teamUser.find((user => user.user_id === Number(professional.value)))) {
      return false
    }
    return true
  })

  return (
    <>
      <ContainerRow>
        <h3>Time</h3>
      </ContainerRow>

      <ContainerRow gap='1em'>
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
          {...register('users.hours_mounths_estimated', {
           })}
          error={errors?.users?.hours_mounths_estimated?.message}
          label='Horas/mês estimadas'
          placeholder='Horas'
        />
        <Inputs.Default
          {...register('users.extra_hours_estimated', {})}
          error={errors?.users?.extra_hours_estimated?.message}
          label='Horas extras estimadas'
          placeholder='Horas'
        />

        <ButtonGeneric
          top='1.5em'
          Text='Vincular'
          bgColor='#0D2551'
          color='white'
          width='30rem'
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
