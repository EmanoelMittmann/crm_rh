import {
  forwardRef,
  useImperativeHandle,
  useState,
  useCallback,
  useEffect,
  useContext
} from 'react'
import { useFormContext } from 'react-hook-form'

import { Button, SelectOption } from '@stardust-ds/react'
import { List } from 'contexts'
import { theme } from 'styles'

import { Inputs, Selects } from 'components/atoms'
import Close from 'components/atoms/Buttons/Close'
import { FormTeamProps } from 'components/organisms/Forms/Project'
import { validation } from 'components/organisms/Forms/Project/logic'
import { FormProjectProps } from 'components/organisms/Forms/Project/types'
import {
  TeamMemberProps,
  UpdateProfessionalProps
} from 'components/organisms/Forms/Team/types'

import {
  Columns,
  ContainerButton,
  ContainerModal,
  ContainerShelfColumn,
  Image,
  Overlay,
  Rh,
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
  EventOne: (
    user_id: number,
    user_projects_id: number,
    data: UpdateProfessionalProps
  ) => void
  defaultOpened?: boolean
}

export interface IHandleModalPropsUserNew {
  open(user_projects_id: number): void
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
  const [isOpen, setIsOpen] = useState({
    user_projects_id: 0
  })
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

  const { team } = useContext(List.Team.Context)
  const professional =
    team &&
    (team.find(
      (item) => item.user_projects_id === isOpen.user_projects_id
    ) as TeamMemberProps)

  const close = useCallback(() => {
    setIsOpen({ user_projects_id: 0 })
  }, [])

  useImperativeHandle(
    ref,
    () => ({
      open: (user_projects_id) => {
        setIsOpen({
          user_projects_id: user_projects_id
        })
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
        label: professional.job_ || '',
        value: professional.job_ || ''
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
        String(professional.date_start_allocation)
      )
      setValue(
        'users.user_projects_id',
        Number(professional.user_projects_id) || 0
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

  if (isOpen.user_projects_id === 0) return null

  return (
    <>
      <ContainerModal>
        <Columns>
          <Row>
            <h3>{text}</h3>
            <Close onClick={() => close()} />
          </Row>
          <RowUser>
            <ContainerShelfColumn gap='.5rem' width='210px'>
              <Image src={professional?.avatar} />
              <TeamJobName>
                <Text>{professional.name}</Text>
                <TextJob>{selectedJob?.label}</TextJob>
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
                width={190}
              />
              <Selects.Default
                {...register('users.jobs.name', {})}
                onSelect={(e: any) => setSelectedJob(e)}
                onClear={() =>
                  setSelectedJob({ label: '', value: '' })
                }
                options={watch('options.jobs')}
                value={selectedJob as any}
                label='Cargo'
                placeholder={placeholder}
                width={190}
              />
            </Row>

            <Row>
              <Selects.Default
                onSelect={(e: any) => setSelectedStatus(e)}
                onClear={() =>
                  setSelectedStatus({ label: '', value: '' })
                }
                options={Options.status as unknown as SelectOption[]}
                label='Status'
                value={selectedStatus as any}
                placeholder={placeholder}
                width={202.5}
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
                  width='190px'
                  height='44px'
                  minHeight='44px'
                />
              )}
            </Row>
          </Columns>
          <Row>
            <Rh />
          </Row>
          <Row>
            <ContainerButton>
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
                    professional.user_id,
                    isOpen.user_projects_id,
                    {
                      hours_mounths_estimated: Number(
                        watch('users.hours_mounths_estimated')
                      ),
                      hours_mounths_performed:
                        Number(
                          watch('users.hours_mounths_performed')
                        ) || 0,
                      date_end_allocation: watch(
                        'users.date_end_allocation'
                      )
                        ? String(watch('users.date_end_allocation'))
                        : null,
                      date_start_allocation: String(
                        watch('users.date_start_allocation')
                      ),
                      isTechLead: Boolean(professional?.isTechLead),
                      job_: String(selectedJob?.label),
                      status: Boolean(selectedStatus?.value),
                      user_id: Number(professional?.user_id),
                      user_projects_id: Number(
                        isOpen.user_projects_id
                      ),
                      extra_hours_estimated: 0,
                      extra_hours_performed: 0
                    }
                  )

                  close()
                }}
                onBlur={() => validateError()}
                disabled={
                  errors?.users?.date_end_allocation?.message ||
                  selectedStatus?.label === ''
                    ? true
                    : false
                }
              >
                Salvar
              </Button>
            </ContainerButton>
          </Row>
        </Columns>
      </ContainerModal>
      <Overlay />
    </>
  )
})

export default UsersEditor
