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
import { theme } from 'styles'
import { Option } from 'types'

import Close from 'components/atoms/Buttons/Close'

import { ContainerModal, Overlay, Columns, Row } from '../style'

interface IModalColorsProps {
  text?: string
  placeholder?: string
  Event(name: string, color: number): void
}

export interface IHandleModalColorsPropsNew {
  open(): void
  close(): void
}

const Colors = forwardRef<
  IHandleModalColorsPropsNew,
  IModalColorsProps
>((props, ref) => {
  const { text, placeholder, Event } = props
  const { filterOptions } = useContext(List.Status.Context)
  const [name, setName] = useState('')
  const [option, setOption] = useState<Option | null>()
  const [isOpen, setIsOpen] = useState(false)

  const close = useCallback(() => {
    setIsOpen(false)
    setName('')
    setOption(null)
  }, [])

  const handleBlock = useMemo(() => {
    if (name.trim() === '') {
      return true
    }
  }, [name])

  useImperativeHandle(
    ref,
    () => ({
      open: () => setIsOpen(true),
      close
    }),
    []
  )

  if (!isOpen) return null
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
                options={filterOptions.colors}
                onSelect={(e: Option | null) => setOption(e)}
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
                Event(name, Number(option?.value))
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
