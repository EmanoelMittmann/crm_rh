import {
    forwardRef,
    useImperativeHandle,
    useState,
    useMemo,
    useEffect,
    useCallback,
    useContext
} from 'react'

import { Button } from '@stardust-ds/react'
import { theme } from 'styles'
import Close from 'components/atoms/Buttons/Close'
import { Columns, ContainerModal, Overlay, Row } from './style'
import { Selects } from 'components/atoms'
import { List } from 'contexts'
import { FormProjectProps } from 'components/organisms/Forms/Project/types'


interface IModalStatusProps {
    text: string
    placeholder: string
    EventOne: (_: number, name: string) => void
    defaultOpened?: boolean
}

export interface IHandleModalStatusProps {
    open(id: number, name: string): void
    close(): void
}

const EditorStatus = forwardRef<IHandleModalStatusProps, IModalStatusProps>(
    (props, ref) => {
        const { text, EventOne, placeholder} = props
        const [isOpen, setIsOpen] = useState({ id: 0, name: '' })
        const [name, setName] = useState<string>('')
        const [selectedStatus, setSelectedStatus] = useState('')
        const {filterOptionsStatus} = useContext(List.Project.Context)
         

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
            if (isOpen.name === name || typeof name !== 'string' || name.trim() === '') {
                return true
            }
            return false
        }, [isOpen.name, name])


        useEffect(() => {
            setName(selectedStatus)
        }, [selectedStatus]) 

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
                            
                              <Selects.Default
                                    onSelect={(e: any) => setSelectedStatus(e.value)}
                                    options={filterOptionsStatus.status}
                                    placeholder={placeholder}
                                    width={380}
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
                                    boxShadow: '0px',
                                }}
                                disabled={handleBlock}
                                bgColor='#0066FF'
                                onClick={() => {
                                    EventOne(isOpen.id, selectedStatus)
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
    }
)

export default EditorStatus;
