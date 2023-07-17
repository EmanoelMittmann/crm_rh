import { useFormContext } from 'react-hook-form'

//import { Input } from '@stardust-ds/react'

import { Inputs, Selects } from 'components/atoms'
import { ButtonGeneric } from 'components/atoms/ButtonGeneric'
import InputTag from 'components/molecules/InputTag'
import { Table } from 'components/organisms/Tables'
import { ProjectPropsHours } from 'components/organisms/Tables/Attachment/types'

import { ContainerRow } from '../style'
import type { FormProps } from '../types'

export const Project = () => {
  const { register, watch, setValue } = useFormContext<FormProps>()

  const handleAddProject = () => {
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
          onClear={() => setValue('uf', null)}
          options={watch('options.projects') ?? []}
          label='Projeto'
          placeholder='Selecione'
          width={275}
        />
        <Inputs.Default
          {...register('projects.selected.input1')}
          label='Horas/mês estimadas'
          placeholder='Horas'
          width={225}
        />
        <Inputs.Default
          {...register('projects.selected.input2')}
          label='Horas extras estimadas'
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
          onClick={handleAddProject}
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
