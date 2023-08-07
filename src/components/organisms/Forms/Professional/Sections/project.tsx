import { useFormContext } from 'react-hook-form'
import { useParams } from 'react-router-dom'

import { differenceBy } from 'lodash'

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
  const { errors } = methods.formState
  const { id } = useParams()
  const { projects, options } = watch()
  const transformOption = projects?.attachment?.map((prop) => ({
    label: prop.name,
    value: { ...prop }
  }))

  const projectNotSelect = differenceBy(
    options?.projects,
    transformOption,
    'label'
  )

  const verifyValues = () => {
    if (!projects.selected.project) {
      return false
    }
    if (
      Number(projects?.selected?.input1) > 160 ||
      Number(projects?.selected?.input1) < 0
    ) {
      methods.setError('projects.selected.input1', {
        message: 'O valor não pode exceder 160h mensais',
        type: 'required'
      })
      return false
    }
    if (
      Number(projects?.selected?.input2) > 80 ||
      Number(projects?.selected?.input2) < 0
    ) {
      methods.setError('projects.selected.input2', {
        message: 'O valor não pode exceder 80h mensais',
        type: 'required'
      })
      methods.setError('projects.selected.input1', { message: '' })
      return false
    }
    methods.setError('projects.selected.input1', { message: '' })
    methods.setError('projects.selected.input2', { message: '' })
    return true
  }

  const handleAddMockProject = () => {
    if (verifyValues()) {
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
      setValue('projects.selected.input1', '')
      setValue('projects.selected.input2', '')
      setValue('projects.selected.project', null)
    }
  }

  const handleAddProject = () => {
    if (verifyValues()) {
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
          options={projectNotSelect}
          label='Projeto'
          style={{ height: '41px' }}
          placeholder='Selecione'
          width={275}
        />
        <Inputs.Default
          {...register('projects.selected.input1')}
          label='Horas/mês estimadas'
          type='number'
          error={errors.projects?.selected?.input1?.message}
          placeholder='Horas/mês'
          width='350px'
        />
        <Inputs.Default
          {...register('projects.selected.input2')}
          label='Horas extras estimadas'
          type='number'
          error={errors.projects?.selected?.input2?.message}
          placeholder='Horas extras'
          width='350px'
          disabled={!watch('extra_hour_activated')}
        />
        <ButtonGeneric
          top='1.5em'
          Text='Vincular'
          bgColor='#0D2551'
          color='white'
          width='290px'
          bRadius='500px'
          height='3.3em'
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
