import {
  forwardRef,
  useImperativeHandle,
  useState,
  useCallback,
  useEffect
} from 'react'
import { Button, Input, Select } from '@stardust-ds/react'
import { theme } from 'styles'
import Close from 'components/atoms/Buttons/Close'
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
import api from 'api'
import { routes } from 'routes'
import { useFormContext } from 'react-hook-form'
import { FormProjectProps } from 'components/organisms/Forms/Project'



interface IModalUserProps {
  text: string
  placeholder: string
  EventOne: (_: number, name: string) => void
  defaultOpened?: boolean
}

export interface IHandleModalPropsUserNew {
  open(user_id: number, name: string): void
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
  const [selectUsers, setSelectUsers] = useState([])
  const [selectedStatus, setSelectedStatus] = useState<Option>()
  const {
    register,
    watch,
    setValue,
  } = useFormContext<FormProjectProps>()
  
  const fetchUsers = async () => {
    try {
      try {
        const response = await api.get(routes.usersProjects.list);
        setSelectUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  }
  const allUsers = selectUsers.flatMap((selectUser: any) => selectUser.users);
  const user = allUsers.find((user: any) => user.id === isOpen.id);


 
  useEffect(() => {
    fetchUsers()
  }, [])


  const close = useCallback(() => {
    setIsOpen({ id: 0 })
  }, [])

  useImperativeHandle(
    ref,
    () => ({
      open: (user_id) => {
        setIsOpen({ id: user_id, })

      },
      close
    }),
    []
  )

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
              <Image src={user.avatar} />
              <TeamJobName>
                <Text>{user.name}</Text>
                <TextJob>{user.job_}</TextJob>
              </TeamJobName>
              <TextHours>{user.hours_mounths_estimated}</TextHours>
            </ContainerShelfColumn>
          </RowUser>

          <Row>
            <Columns>
              <Input
                label='Horas mensais'
                width={200}
                value={user.hours_mounths_estimated}
              />

              <Select
                {...register('jobs.name', {})}
                onSelect={(value: any) =>
                  setValue('jobs.name', value, { shouldValidate: true })
                }
                onClear={() => setValue('jobs.name', null)}
                options={watch('options.jobs')}
                label='Cargo'
                defaultValue={user.job_.name}
                placeholder={placeholder}
                width={200}
              />
            </Columns>

            <Columns>
              <Input
                label='Horas extras'
                width={200}
                value={user.extra_hours_estimated}
              />

              <Select
                onSelect={(e: any) => setSelectedStatus(e.value)}
                onClear={() => setSelectedStatus({ label: '', value: '' })}
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
                // EventOne(isOpen.id, selectedStatus?.value as string)
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
