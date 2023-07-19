import { useMemo } from 'react'
import { useFormContext } from 'react-hook-form'

//import { Input } from '@stardust-ds/react'

import { useParams } from 'react-router-dom'

import { Inputs, Selects } from 'components/atoms'
import { ButtonGeneric } from 'components/atoms/ButtonGeneric'
import { Table } from 'components/organisms/Tables'
import { ProjectPropsHours } from 'components/organisms/Tables/Attachment/types'
import { projectBind } from 'components/pages/RegisterProfessional/logic'

import { ContainerRow } from '../style'
import type { FormProps } from '../types'

export const Project = () => {
  const { register, watch, setValue, ...methods } =
    useFormContext<FormProps>()
  const { id } = useParams()
  const { projects } = watch()

  const handleAddMockProject = () => {
    const project = watch('projects.selected.project') as any
    const { id, name } = project?.value
    const payload: ProjectPropsHours = {
      id,
      name,
      date_start: new Date().toLocaleDateString('pt-BR'),
      extra_hours_estimated:
        Number(watch('projects.selected.input1')) || 0,
      hours_mounths_estimated:
        Number(watch('projects.selected.input1')) || 0,
      extra_hours_performed: 0,
      hours_mounths_performed: 0
    }
    const previous_projects = watch('projects.attachment', [])
    setValue('projects.attachment', [...previous_projects, payload])
  }

  const handleAddProject = () => {
    const monthHours = watch('projects.selected.input1')
    const extraHours = watch('projects.selected.input2')
    const project = watch('projects.selected.project') as any
    const projectid = project?.value.id

    if (!id) return null

    projectBind(
      {
        hours_mounths_estimated: Number(monthHours),
        extra_hours_estimated: Number(extraHours),
        id: Number(projectid)
      },
      Number(id),
      { register, watch, setValue, ...methods }
    )
  }

  return (
    <>
      <ContainerRow>
        <h3>Vincular Projetos</h3>
      </ContainerRow>
      <ContainerRow gap='1rem'>
        <Selects.Default
          {...register('projects.selected.project')}
          onSelect={(v: any) =>
            setValue('projects.selected.project', v)
          }
          value={watch('projects.selected.project') as any}
          onClear={() => setValue('projects.selected.project', null)}
          options={watch('options.projects') ?? []}
          label='Projeto'
          placeholder='Selecione'
          width={275}
        />
        <Inputs.Default
          {...register('projects.selected.input1')}
          label='Horas/mês estimadas'
          type='number'
          error={
            Number(projects?.selected?.input1) < 0
              ? 'Valores Invalidos'
              : undefined
          }
          placeholder='Horas'
          width={225}
        />
        <Inputs.Default
          {...register('projects.selected.input2')}
          label='Horas extras estimadas'
          type='number'
          error={
            Number(projects?.selected?.input2) < 0
              ? 'Valores Invalidos'
              : undefined
          }
          placeholder='Horas'
          width={225}
        />
        <ButtonGeneric
          top='1em'
          Text='Vincular'
          bgColor='#0D2551'
          color='white'
          width='10em'
          bRadius='500px'
          height='3.5em'
          type='button'
          onClick={() => {
            id ? handleAddProject() : handleAddMockProject()
          }}
        />
      </ContainerRow>
      <ContainerRow>
        <Table.Attachment />
      </ContainerRow>
      <ContainerRow
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <h4>Ferramentas</h4>
        <Inputs.Default
          {...register('tools')}
          value={watch('tools')}
          placeholder='Digite ferramentas'
        />
      </ContainerRow>
    </>
  )
}
