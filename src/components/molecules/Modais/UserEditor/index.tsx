import {
  forwardRef,
  useImperativeHandle,
  useState,
  useCallback,
  useEffect
} from 'react'
import { useFormContext } from 'react-hook-form'

import { Button, Select } from '@stardust-ds/react'
import { theme } from 'styles'

import { Inputs } from 'components/atoms'
import Close from 'components/atoms/Buttons/Close'
import { FormTeamProps } from 'components/organisms/Forms/Project'
import { validation } from 'components/organisms/Forms/Project/logic'
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
    { label: 'Ativo', value: true },
    { label: 'Inativo', value: false }
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
    setValue,
    setError,
    clearErrors,
    formState: { errors }
  } = useFormContext<FormProjectProps>()

  const { team } = useFormContext<FormTeamProps>().watch()
  const professional =
    team && team.find((item) => item.user_id === isOpen.id)

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
        value: professional.status
      }
      const selectedJob = {
        label: professional.jobs?.name?.label || '',
        value: professional.jobs
      }

      setSelectedStatus(selectedStatus as unknown as Option)
      setSelectedJob(selectedJob as unknown as Option)
      setValue('users.status', selectedStatus?.value)
      setValue('users.jobs.name.label', selectedJob?.label)
      setValue(
        'users.hours_mounths_estimated',
        Number(professional.hours_mounths_estimated) || 0
      )
      setValue(
        'users.date_end_allocation',
        professional.date_end_allocation
      )
      setValue(
        'users.date_start_allocation',
        professional.date_start_allocation
      )
    }
  }, [professional, setValue])

  const alocation = watch('users.date_end_allocation')
  const validateError = () => {
    if (selectedStatus?.label === 'Inativo' && alocation === '') {
      setError('users.date_end_allocation', {
        type: 'required',
        message: validation.required
      })
      return false
    } else {
      clearErrors('users.date_end_allocation')
      return true
    }
  }

  useEffect(() => {
    validateError()
  }, [selectedStatus?.label, alocation])

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
          <Columns>
            <Row>
              <Inputs.Default
                {...register('users.hours_mounths_estimated', {})}
                label='Horas mensais'
                value={watch('users.hours_mounths_estimated')}
                placeholder={placeholder}
                width={200}
                height={40}
                disabled={true}
              />
              <Select
                {...register('users.jobs.name', {})}
                onSelect={(e: any) => setSelectedJob(e)}
                onClear={() =>
                  setSelectedJob({ label: '', value: '' })
                }
                options={watch('options.jobs')}
                value={selectedJob}
                label='Cargo'
                placeholder={placeholder}
                width={200}
                disabled={true}
              />
            </Row>

            <Row>
              <Select
                onSelect={(e: any) => setSelectedStatus(e)}
                onClear={() =>
                  setSelectedStatus({ label: '', value: '' })
                }
                options={Options.status as unknown as Option[]}
                label='Status'
                value={selectedStatus}
                placeholder={placeholder}
                width={200}
              />
              {selectedStatus?.label === 'Inativo' && (
                <Inputs.Default
                  {...register('users.date_end_allocation', {
                    validate: () => validateError()
                  })}
                  value={watch('users.date_end_allocation')}
                  error={errors?.users?.date_end_allocation?.message}
                  type='date'
                  label='Data final de alocação'
                  width='200px'
                  required
                />
              )}
            </Row>
          </Columns>
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
                  hours_mounths_performed:
                    Number(watch('users.hours_mounths_performed')) ||
                    0,
                  date_end_allocation: String(
                    watch('users.date_end_allocation')
                  ),
                  date_start_allocation: String(
                    watch('users.date_start_allocation')
                  ),
                  isTechLead: Boolean(professional?.isTechLead),
                  job_: String(selectedJob?.label),
                  status: Boolean(selectedStatus?.value),
                  user_id: Number(isOpen.id),
                  extra_hours_estimated: 0,
                  extra_hours_performed: 0
                })

                close()
              }}
              onBlur={() => validateError()}
              disabled={
                !selectedStatus?.label ||
                errors.users?.date_end_allocation?.message ||
                alocation === ''
                  ? true
                  : false
              }
            >
              Salvar
            </Button>
          </Row>
        </Columns>
      </ContainerModal>
      <Overlay />
    </>
  )
})

export default UsersEditor
