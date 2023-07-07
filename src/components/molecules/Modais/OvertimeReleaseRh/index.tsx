import {
  forwardRef,
  useImperativeHandle,
  useState,
  useCallback
} from 'react'

import Close from 'components/atoms/Buttons/Close'

import {
  Columns,
  ContainerAbsolute,
  ContainerDate,
  ContainerModal,
  Overlay,
  Row,
  TitleProject
} from './style'
import { IHandleModalPropsExtrasHoursRh, IModalProps } from './type'

const OvertimeReleaseRh = forwardRef<
  IHandleModalPropsExtrasHoursRh,
  IModalProps
>((props, ref) => {
  const { text } = props

  const [isOpen, setIsOpen] = useState({
    user_id: 0,
    user_name: '',
    projact_name: ''
  })

  const close = useCallback(() => {
    setIsOpen({
      user_id: 0,
      user_name: '',
      projact_name: ''
    })
  }, [])

  useImperativeHandle(
    ref,
    () => ({
      open: (user_id, user_name, projact_name) =>
        setIsOpen({
          user_id: user_id,
          user_name: user_name,
          projact_name: projact_name
        }),
      close
    }),
    []
  )

  if (isOpen.user_id === 0) return null

  return (
    <>
      <ContainerModal>
        <Columns>
          <Row>
            <h2>{text}</h2>
            <Close onClick={() => close()} />
          </Row>

          <Row>
            <ContainerAbsolute>
              <TitleProject>{isOpen.projact_name}</TitleProject>
              <ContainerDate></ContainerDate>
            </ContainerAbsolute>
          </Row>
        </Columns>
      </ContainerModal>
      <Overlay />
    </>
  )
})

export default OvertimeReleaseRh
