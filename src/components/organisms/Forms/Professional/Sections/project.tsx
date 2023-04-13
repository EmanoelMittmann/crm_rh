import { useFormContext } from 'react-hook-form'
import { Inputs, Selects } from 'components/atoms'
import { ButtonGeneric } from 'components/atoms/ButtonGeneric'
import { ContainerRow } from '../style'
import type { FormProps } from '../types'

export const Project = () => {
  const { register, watch, setValue } = useFormContext<FormProps>()

  return (
    <>
      <ContainerRow>
        <h3>Vincular Projetos</h3>
      </ContainerRow>
      <ContainerRow gap='1rem'>
        <Selects.Default
          {...register('projects.selected.project')}
          onSelect={(v: any) => setValue('projects.selected.project', v)}
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
        />
      </ContainerRow>
      <ContainerRow>
        {/* TODO: Criar componente na pasta: moléculas/tabelas  */}
        {/* <Table>
          <Header>
            <Column left='1em' width='40%'>
              Projeto
            </Column>
            <Column width='20%'>Início do Projeto</Column>
            <Column width='20%'>Horas Mensais</Column>
            <Column width='5%'>%</Column>
          </Header>
        </Table> */}
      </ContainerRow>
    </>
  )
}
