import {
  forwardRef,
  useImperativeHandle,
  useState,
  useCallback,
  useContext
} from 'react'
import { Button, Input, Select } from '@stardust-ds/react'
import { List } from 'contexts'
import { theme } from 'styles'
import Close from 'components/atoms/Buttons/Close'
import { Columns, ContainerModal, Overlay, Row } from './style'
import { Option } from 'types'


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

const UsersEditor = forwardRef<
  IHandleModalPropsUserNew,
  IModalUserProps
>((props, ref) => {
  const { text, EventOne, placeholder } = props
  const [isOpen, setIsOpen] = useState({ id: 0})
  const [selectedStatus, setSelectedStatus] = useState<Option>()
  const {filterOptionsStatus} = useContext(List.Project.Context)
  

  const close = useCallback(() => {
    setIsOpen({ id: 0})
  }, [])

  useImperativeHandle(
    ref,
    () => ({
      open: (user_id) => {
        setIsOpen({ id: user_id,})
       
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
          <Row>
            <Columns>
            <h5>Profissional</h5>
            </Columns>
          </Row>
            <Row>
              <Columns>
                <Input
                  label='Horas mensais'
                  width={180}
                />
              
              <Select
                onSelect={(e: any) => setSelectedStatus(e.value)}
                onClear={() => setSelectedStatus({ label: '', value: '' })}
                options={[]}
                label='Cargo'
                defaultValue={selectedStatus}
                placeholder={placeholder}
                width={180}
              />
              </Columns>
     
            <Columns>
              <Input
                label='Horas extras'
                width={180}
              />
            
              <Select
                onSelect={(e: any) => setSelectedStatus(e.value)}
                onClear={() => setSelectedStatus({ label: '', value: '' })}
                options={[]}
                label='Status'
                defaultValue={selectedStatus}
                placeholder={placeholder}
                width={180}
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
