import {
  forwardRef,
  useImperativeHandle,
  useState,
  useMemo,
  useEffect,
  useCallback
} from 'react'

import Close from 'components/atoms/Buttons/Close'

import { Columns, ContainerModal, Overlay, Row } from './style'

interface IModalProps {
  text: string
  placeholder: string
  EventOne: (_: number, name: string) => void
  defaultOpened?: boolean
}

export interface IHandleModalPropsDetails {
  open(id: number, name: string): void
  close(): void
}

const Detais = forwardRef<IHandleModalPropsDetails, IModalProps>(
  (props, ref) => {
    const { text, placeholder, EventOne } = props
    const [isOpen, setIsOpen] = useState({ id: 0, name: '' })
    const [name, setName] = useState<string>('')
    console.log('name: ', name);
    const close = useCallback(() => {
      setIsOpen({ id: 0, name: '' })
    }, [])

    useImperativeHandle(
      ref,
      () => ({
        open: (id, name) => setIsOpen({ id: id, name: name }),
        close
      }),
      []
    )

    const handleBlock = useMemo(() => {
      if (isOpen.name === name || name.trim() === '') {
        return true
      }
      return false
    }, [name])

    useEffect(() => {
      setName(isOpen.name)
    }, [isOpen.name])

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
              {name}
            </Row>
          </Columns>
        </ContainerModal>
        <Overlay />
      </>
    )
  }
)

export default Detais
