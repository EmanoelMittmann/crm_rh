import {
  forwardRef,
  useImperativeHandle,
  useState,
  useCallback,
  useContext
} from 'react'
import { Button, Select } from '@stardust-ds/react'
import { List } from 'contexts'
import { theme } from 'styles'
import Close from 'components/atoms/Buttons/Close'
import { Columns, ContainerModal, Overlay, Row } from './style'
import { Option } from 'types'


interface IModalStatusProps {
  text: string
  placeholder: string
  EventOne: (_: number, name: string) => void
  defaultOpened?: boolean
}

export interface IHandleModalColorsPropsNew {
  open(id: number, name: string, status:any): void
  close(): void
}

const EditorStatus = forwardRef<IHandleModalColorsPropsNew, IModalStatusProps>((props, ref) => {
  const { text, EventOne, placeholder } = props;
  const [isOpen, setIsOpen] = useState({ id: 0, name: '' });
  const [selectedStatus, setSelectedStatus] = useState<Option>();
  const { filterOptionsStatus } = useContext(List.Project.Context);

  
  const close = useCallback(() => {
    setIsOpen({ id: 0, name: '' });
  }, []);

  useImperativeHandle(
    ref,
    () => ({
      open: (id, name, status) => {
        setIsOpen({ id: id, name: name });
        setSelectedStatus({
          label: status.name,
          value: String(status.id),
        });
      },
      close,
    }),
    []
  );

  if (isOpen.id === 0) return null;


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
              <Select
                onSelect={(e: any) => setSelectedStatus(e)}
                onClear={() => setSelectedStatus({ label: '', value: '' })}
                options={filterOptionsStatus.status}
                defaultValue={selectedStatus}
                placeholder={placeholder}
                width={380}
              />
            </Columns>
          </Row>
          <Row>
            <Button
              style={{ borderRadius: '500px' }}
              bgColor="#E9EBEE"
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
              bgColor="#0066FF"
              onClick={() => {
                EventOne(isOpen.id, selectedStatus?.value || '');
                close();
              }}
            >
              Cadastrar
            </Button>
          </Row>
        </Columns>
      </ContainerModal>
      <Overlay />
    </>
  );
});

export default EditorStatus;
