import {
  forwardRef,
  useImperativeHandle,
  useState,
  useCallback
} from 'react'
import { useFormContext } from 'react-hook-form'

import { Button } from '@stardust-ds/react'
import { theme } from 'styles'

import { IconAlert } from 'components/atoms'
import Close from 'components/atoms/Buttons/Close'
import { FormTeamProps } from 'components/organisms/Forms/Project'

import {
  ContainerModal,
  Overlay,
  Columns,
  Row,
  RowButton,
  IconContainer,
  Icon
} from './style'

interface IModalProps {
  title: string
  EventOne: (user_projects_id: number, user_id: number) => void
}

export interface IHandleModalPropsDelete {
  open(user_projects_id: number, user_id: number): void
  close(): void
}

const Delete = forwardRef<IHandleModalPropsDelete, IModalProps>(
  (props, ref) => {
    const { watch } = useFormContext<FormTeamProps>()
    const professional = watch('team', [])
    const { title, EventOne } = props
    const [isOpen, setIsOpen] = useState({
      user_projects_id: 0,
      user_id: 0
    })

    const userName = professional
      .filter((item) => item.user_id === isOpen.user_id)
      .map((item) => item.professional.name?.label)
    const name = userName[0]
    const firsName = name?.split(' ')[0]
    const surName = name?.split(' ').slice(1).join(' ')

    const close = useCallback(() => {
      setIsOpen({ user_projects_id: 0, user_id: 0 })
    }, [])

    useImperativeHandle(
      ref,
      () => ({
        open: (user_projects_id, user_id) =>
          setIsOpen({
            user_projects_id: user_projects_id,
            user_id: user_id
          }),
        close
      }),
      []
    )
    if (isOpen.user_projects_id === 0 || isOpen.user_id === 0)
      return null

    return (
      <>
        <ContainerModal>
          <Columns>
            <Icon>
              <Close onClick={() => close()} />
            </Icon>
            <IconContainer>
              <IconAlert />
            </IconContainer>
            <Row>
              <h2>{title}</h2>
            </Row>
            <Row>
              <p>
                Tem certeza que deseja remover
                <span> </span>
                <span>{firsName}</span>
                <span>{surName}</span>
                do projeto?
              </p>
            </Row>
            <RowButton>
              <Button
                style={{ borderRadius: '500px' }}
                bgColor='#E9EBEE'
                labelColor={theme.neutrals.gray7}
                onClick={close}
                width={150}
                height={42}
              >
                Cancelar
              </Button>
              <Button
                style={{
                  borderRadius: '500px',
                  boxShadow:
                    '0px 5px 10px 0px rgba(255, 53, 65, 0.25)'
                }}
                width={155}
                height={42}
                bgColor='rgba(255, 53, 65, 1)'
                onClick={() => {
                  EventOne(isOpen.user_projects_id, isOpen.user_id)
                  close()
                }}
              >
                Sim, remover
              </Button>
            </RowButton>
          </Columns>
        </ContainerModal>
        <Overlay />
      </>
    )
  }
)

export default Delete
