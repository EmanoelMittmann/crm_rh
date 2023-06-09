import {
  forwardRef,
  useImperativeHandle,
  useState,
  useCallback,
  useEffect
} from 'react'
import { useFormContext } from 'react-hook-form'

import { Button, Input, Select } from '@stardust-ds/react'
import { theme } from 'styles'

import Close from 'components/atoms/Buttons/Close'
import { FormTeamProps } from 'components/organisms/Forms/Project'
import { FormProjectProps } from 'components/organisms/Forms/Project/types'
import { UpdateProfessionalProps } from 'components/organisms/Forms/Team/types'

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
  EventOne: (user_id: number, data: UpdateProfessionalProps) => void
  defaultOpened?: boolean
}

export interface IHandleModalPropsUserNew {
  open(user_id: number): void
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

  const { register, watch, setValue } =
    useFormContext<FormProjectProps>()

  const { team } = useFormContext<FormTeamProps>().watch()
  const professional = team.find((item) => item.user_id === isOpen.id)

  const close = useCallback(() => {
    setIsOpen({ id: 0 })
  }, [])

  useImperativeHandle(
    ref,
    () => ({
      open: (user_id) => {
        setIsOpen({ id: user_id })
      },
      close
    }),
    []
  )

  useEffect(() => {
    if (professional) {
      const selectedStatus = {
        label: professional.status ? 'Ativo' : 'Inativo',
        value: professional.status ? '1' : '0'
      }
      const selectedJob = {
        label: professional.jobs?.name?.label || '',
        value: String(professional.jobs?.name || '0')
      }

      setSelectedStatus(selectedStatus)
      setSelectedJob(selectedJob)

      setTimeout(() => {
        setValue('jobs.name', selectedJob || null)
        setValue(
          'users.hours_mounths_estimated',
          Number(professional.hours_mounths_estimated) || 0
        )
        setValue(
          'users.extra_hours_estimated',
          Number(professional.extra_hours_estimated) || 0
        )
      }, 0)
    }
  }, [professional, setValue])

  if (isOpen.id === 0) return null

  return (
    <>
      <ContainerModal>
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
              <TextHours>
                {professional?.hours_mounths_estimated}
              </TextHours>
            </ContainerShelfColumn>
          </RowUser>

          <Row>
            <Columns>
              <Input
                {...register('users.hours_mounths_estimated', {})}
                label='Horas mensais'
                value={watch('users.hours_mounths_estimated')}
                placeholder={placeholder}
                width={200}
              />

              <Select
                {...register('jobs.name', {})}
                onSelect={(e: any) => setSelectedJob(e)}
                onClear={() =>
                  setSelectedJob({ label: '', value: '' })
                }
                options={watch('options.jobs')}
                value={selectedJob}
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
                value={watch('users.extra_hours_estimated')}
                placeholder={placeholder}
              />

              <Select
                onSelect={(e: any) => setSelectedStatus(e)}
                onClear={() =>
                  setSelectedStatus({ label: '', value: '' })
                }
                options={Options.status}
                label='Status'
                value={selectedStatus}
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
                EventOne(isOpen.id, {
                  hours_mounths_estimated: Number(
                    watch('users.hours_mounths_estimated')
                  ),
                  extra_hours_estimated: Number(
                    watch('users.extra_hours_estimated')
                  ),
                  hours_mounths_performed:
                    Number(watch('users.hours_mounths_performed')) ||
                    0,
                  extra_hours_performed:
                    Number(watch('users.extra_hours_performed')) || 0,
                  isTechLead: Boolean(professional?.isTechLead),
                  job_: String(selectedJob?.label),
                  status: Number(selectedStatus?.value),
                  user_id: Number(isOpen.id)
                })

                close()
              }}
            >
              Cadastrar
            </Button>
          </Row>
        </Columns>
      </ContainerModal>
      <Overlay />
    </>
  )
})

export default UsersEditor
