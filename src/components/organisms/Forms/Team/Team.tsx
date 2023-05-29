import { useFormContext } from 'react-hook-form'
import { Selects, Inputs, SelectOption } from 'components/atoms'
import { ButtonGeneric } from 'components/atoms/ButtonGeneric'
import { Table } from 'components/organisms/Tables'
import { FormTeamProps, TeamMemberProps } from './types'
import { ContainerRow } from 'components/organisms/Forms/Project/style'



export const Team = () => {
  const { 
    register, 
    watch, 
    setValue,
    getValues, 
    formState: { errors } 
  } = useFormContext<FormTeamProps>();

  const options = watch('options');


  const handleTeam = () => {
    const professional = watch('professional')
    const id = Number(watch('professional.name.value'))
    const avatar = watch('professional.avatar.label')
    const jobs = watch('jobs')
    const status = watch('users.status')
    const hoursMonth = Number(watch('users.hours_mounths_estimated') ?? 0)
    const extraHour = Number(watch('users.extra_hours_estimated') ?? 0)
    const hours_mounths_performed = Number(watch('users.hours_mounths_performed') ?? 0)
    const extra_hours_performed = Number(watch('users.extra_hours_performed') ?? 0)
    const techLead = watch('users.isTechLead')

    if (professional && jobs) {
      if (extraHour && hoursMonth) {
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
          avatar: avatar ? avatar : 'https://www.fiscalti.com.br/wp-content/uploads/2021/02/default-user-image.png',
          status: status ? false : true,
        } as unknown as TeamMemberProps;

        const currentTeam = getValues('team') || [];
        const newTeam = [...currentTeam, newTeamMember];

        setValue('team', newTeam);
      }
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
          options={options?.professionals as SelectOption[]}
          label='Time'
          placeholder='Selecione'
          width={180}
        />
        <Selects.Default
          {...register('jobs.name', {})}
          onSelect={(value: any) =>
            setValue('jobs.name', value, { shouldValidate: true })
          }
          onClear={() => setValue('jobs.name', null)}
          options={options?.jobs as SelectOption[]}
          label='Cargo'
          placeholder='Selecione'
          width={180}
        />
        <Inputs.Default
          {...register('users.hours_mounths_estimated', {
            required: 'Campo obrigatório',
            validate: (value) => {
              return Number(value) > 0 || 'O Campo Horas/mês estimadas deve ser maior que zero.';
            }
          })}
          error={errors.users?.hours_mounths_performed?.message}
          label='Horas/mês estimadas'
          placeholder='Horas'
          width={160}
          height={40}
        />
        <Inputs.Default
          {...register('users.extra_hours_estimated', {
            required: 'Campo obrigatório',
            validate: (value) => {
              return Number(value) > 0 || 'O Campo Horas extras estimadas deve ser maior que zero.';
            }
          })}
          error={errors.users?.extra_hours_performed?.message}
          label='Horas extras estimadas'
          placeholder='Horas'
          width={160}
          height={40}
        />


        <ButtonGeneric
          top='1.5em'
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
        <Table.Team />
      </ContainerRow>

    </>
  )
}
