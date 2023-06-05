import {
  forwardRef,
  useImperativeHandle,
  useState,
  useCallback,
} from 'react'
import { useFormContext } from 'react-hook-form'
import { Button, Input, Select } from '@stardust-ds/react'
import { theme } from 'styles'
import Close from 'components/atoms/Buttons/Close'
import { FormProjectProps } from 'components/organisms/Forms/Project'


import {
  Columns,
  ContainerModal,
  ContainerShelfColumn,
  Image,
  Overlay,
  Row,
  RowUser,
  TeamJobName,
  Text,
  TextHours,
  TextJob
} from './style'
import { Option } from 'types'


interface IModalUserProps {
  text: string
  placeholder: string
  EventOne: (_: number, 
    user_id: number | undefined,
    extra_hours_estimated: number | undefined,
    extra_hours_performed: number | undefined,
    hours_mounths_estimated: number | undefined,
    hours_mounths_performed: number | undefined,
    isTechLead: boolean | undefined,
    status:  boolean | undefined,
    job_: string | undefined,
    ) => void
  defaultOpened?: boolean
}

export interface IHandleModalPropsUserNew {
  open(user_id: number, name: string, status: boolean,
   ): void
  close(): void
}

const Options = {
  status: [
    { label: 'Ativo', value: '1' },
    { label: 'Inativo', value: '0' }
  ]
}

const UsersEditor = forwardRef<
  IHandleModalPropsUserNew,
  IModalUserProps
>((props, ref) => {
  const { text, EventOne, placeholder } = props
  const [isOpen, setIsOpen] = useState({ id: 0 })
  const [selectedStatus, setSelectedStatus] = useState<Option>()
  const [selectedJob, setSelectedJob] = useState<Option>()
  const {
    register,
    watch,
    setValue
  } = useFormContext<FormProjectProps>()
  
  
  const {team} = watch()
  const professional = team.find((item: any) => item.user_id === isOpen.id)
  
  // console.log('Equipe : ', team);
  // console.log('profissional: ', professional);
  // console.log('selectedStatus: ', selectedStatus);
  // console.log('selectedJob: ', selectedJob);
  // console.log('horas mes: ', professional?.hours_mounths_estimated);
  // console.log('horas extra: ', professional?.extra_hours_estimated);


  const close = useCallback(() => {
    setIsOpen({ id: 0 })
  }, [])

  useImperativeHandle(
    ref,
    () => ({
      open: (user_id) => {
        setIsOpen({ id: user_id })
        setSelectedStatus({
          label: professional?.status ? 'Ativo' : 'Inativo',
          value: String(professional?.status)
        })
        setSelectedJob({label: String(professional?.jobs.name?.label),
          value: String(professional?.jobs.name?.value)
        });
      },
      close
    }),
    []
  )

  if (isOpen.id === 0) return null

  return (
    <>
      {/* <ContainerModal>
        <Columns>
          <Row>
            <h2>{text}</h2>
            <Close onClick={() => close()} />
          </Row>
          <RowUser>
            <ContainerShelfColumn gap='.5rem' width='210px'>
              <Image src={professional?.avatar} />
              <TeamJobName>
                <Text>{professional?.professional.name?.label}</Text>
                <TextJob>{professional?.jobs.name?.label}</TextJob>
              </TeamJobName>
              <TextHours>{professional?.hours_mounths_estimated}</TextHours>
            </ContainerShelfColumn>
          </RowUser>

          <Row>
            <Columns>
              <Input
                {...register('users.hours_mounths_estimated', {})}
                label='Horas mensais'
                defaultValue={professional?.hours_mounths_estimated}
                width={200}
              />

              <Select
                {...register('jobs.name', {})}
                onSelect={(e: any) => setSelectedJob(e)}
                onClear={() => setSelectedJob({ label: '', value: '' })}
                options={watch('options.jobs')}
                value={professional?.jobs.name}
                label='Cargo'
                placeholder={placeholder}
                width={200}
              />
            </Columns>

            <Columns>
              <Input
                {...register('users.extra_hours_estimated', {})}
                label='Horas extras'
                width={200}
                defaultValue={professional?.extra_hours_estimated}
              />

              <Select
                onSelect={(e: any) => setSelectedStatus(e)}
                onClear={() =>
                  setSelectedStatus({ label: '', value: '' })
                }
                options={Options.status}
                label='Status'
                defaultValue={selectedStatus}
                placeholder={placeholder}
                width={200}
              />
            </Columns>
          </Row>
          <Row>
            <Button
              style={{ borderRadius: '500px' }}
              bgColor='#E9EBEE'
              labelColor={theme.neutrals.gray7}
              onClick={close}
            >
              Cancelar
            </Button>
            <Button
              style={{
                borderRadius: '500px',
                boxShadow: '0px'
              }}
              bgColor='#0066FF'
              onClick={() => {
                EventOne(
                  isOpen.id,
                  professional?.user_id,
                  professional?.extra_hours_estimated,
                  professional?.extra_hours_performed,
                  professional?.hours_mounths_estimated,
                  professional?.hours_mounths_performed,
                  professional?.isTechLead,
                  selectedStatus?.value === '1' ? true : false,
                  professional?.job_
                  )
                close()
              }}
            >
              Cadastrar
            </Button>
          </Row>
        </Columns>
      </ContainerModal> */}
      <Overlay />
    </>
  )
})

export default UsersEditor
