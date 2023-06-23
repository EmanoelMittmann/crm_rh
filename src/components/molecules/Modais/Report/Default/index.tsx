import {
  forwardRef,
  useImperativeHandle,
  useState,
  useCallback,
  useContext
} from 'react'

import { Select } from '@stardust-ds/react'
import { Button } from '@stardust-ds/react'
import { List } from 'contexts'
import { theme } from 'styles'

import Close from 'components/atoms/Buttons/Close'

import { ContainerModal, Overlay, Columns, Row } from '../../style'
import { Option } from 'types'

interface IModalProps {
  text: string
  placeholder: string
}

export interface IHandleModalReport {
  open(_: boolean): void
  close(): void
}

const Report = forwardRef<IHandleModalReport, IModalProps>(
  (props, ref) => {
    const { filterOptions, handleExcel } = useContext(
      List.Reports.Context
    )
    const { text, placeholder } = props
    const [isOpen, setIsOpen] = useState(false)
    const [Option, setOption] = useState<Option | null>()

    const close = useCallback(() => {
      setIsOpen(false)
    }, [])

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
          <Columns>
            <Row>
              <h2>{text}</h2>
              <Close onClick={() => close()} />
            </Row>
            <Row>
              <Select
                width={385}
                value={Option}
                onClear={() => setOption(null)}
                label='Empresas'
                onSelect={(ops: Option | null) =>
                  ops && setOption(ops)
                }
                options={filterOptions.companies}
                placeholder={placeholder}
              />
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
                  boxShadow: '0px 5px 10px 0px #0066FF40'
                }}
                bgColor='#0066FF'
                onClick={() => {
                  handleExcel(Number(Option?.value))
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

export default Report
