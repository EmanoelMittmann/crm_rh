import {
  forwardRef,
  useState,
  useContext,
  useCallback,
  useImperativeHandle,
  useMemo
} from 'react'

import { Input, Select } from '@stardust-ds/react'
import { Button } from '@stardust-ds/react'
import { List } from 'contexts'
import { ColorProps } from 'contexts/List/Settings/StatusProjects/types' // corrigir a origem desse import
import { theme } from 'styles'

import Close from 'components/atoms/Buttons/Close'

import { ContainerModal, Overlay, Columns, Row } from '../style'
import { DEFAULT } from './constants'
import { Option } from 'types'

interface IModalColorsProps {
  text?: string
  placeholder?: string
  Event(id: number, name: string, color: string): void
}

export interface IHandleModalColorsPropsEdit {
  open(id: number, name: string, color: ColorProps): void
  close(): void
}

const Colors = forwardRef<
  IHandleModalColorsPropsEdit,
  IModalColorsProps
>((props, ref) => {
  const { text, placeholder, Event } = props
  const { filterOptions } = useContext(List.Status.Context)
  const [name, setName] = useState('')
  const [option, setOption] = useState<Option>()
  const [isOpen, setIsOpen] = useState(DEFAULT)

  const close = useCallback(() => {
    setIsOpen(DEFAULT)
  }, [])

  const handleBlock = useMemo(() => {
    if (
      (name === isOpen.name && option?.label === isOpen.color.name) ||
      name.trim() === '' ||
      !option
    ) {
      return true
    }
  }, [name, option])

  useImperativeHandle(
    ref,
    () => ({
      open: (id, name, color) => {
        setIsOpen({ id: id, name: name, color: color })
        setName(name)
        setOption({ label: color.name, value: String(color.id) })
      },
      close
    }),
    []
  )

  if (isOpen.id === 0) return null
  return (
    <>
      <ContainerModal>
        <Columns gap='1em'>
          <Row>
            <h2>{text}</h2>
            <Close onClick={close} />
          </Row>
          <Row>
            <Columns gap=' 1em'>
              <Input
                width={385}
                value={name}
                onChange={(e) => setName(e.target.value)}
                label='Status'
                color={theme.neutrals.gray8}
                placeholder={placeholder}
              />
              <Select
                defaultValue={option}
                options={filterOptions.colors}
                onSelect={(e: any) => setOption(e)}
                placeholder='Colors'
              />
            </Columns>
          </Row>
          <br />
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
                boxShadow: '0px 5px 10px 0px #0066FF40'
              }}
              bgColor='#0066FF'
              disabled={handleBlock}
              onClick={() => {
                Event(
                  isOpen.id,
                  name,
                  option?.value || String(isOpen.color.id)
                )
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

export default Colors
