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
import { List } from 'contexts'
import { theme } from 'styles'
import { Selects } from 'components/atoms'
import Close from 'components/atoms/Buttons/Close'

import { Columns, ContainerModal, Overlay, Row } from './style'


interface IModalStatusProps {
  text: string
  placeholder: string
  EventOne: (_: number, name: string) => void
  defaultOpened?: boolean
}

export interface IHandleModalStatusProps {
  open(id: number, name: string): boolean
  close(): void
}

export const EditorStatus = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [name, setName] = useState<string>('')
  const [selectedStatus, setSelectedStatus] = useState('')
  const { projects } = useContext(List.Project.Context)
 
const handleclick = () => {
  setIsOpen((prev) => !prev)
}


  const project = projects.find((project) => project.project_status_id === project.project_status_id)
  const projectStatus = project?.project_status_id





  

  return (
    <>
      <ContainerModal>
        <Columns>
          <Row>
            <h2>{}</h2>
            <Close onClick={() => close()} />
          </Row>
          <Row>
            <Columns>
              <Selects.Default
                options={[]}
                onChange={(e:any) => setSelectedStatus(e.target.value)}
                width={380}
              />
            </Columns>
          </Row>
          <Row>
            <Button
              style={{ borderRadius: '500px' }}
              bgColor='#E9EBEE'
              labelColor={theme.neutrals.gray7}
              onClick={handleclick}
            >
              Cancelar
            </Button>
            <Button
              style={{
                borderRadius: '500px',
                boxShadow: '0px'
              }}
             onClick={()=>{}}
              bgColor='#0066FF'
             
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




