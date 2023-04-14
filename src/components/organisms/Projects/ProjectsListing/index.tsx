import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Badge } from '@stardust-ds/react'

import { IconThreePoints } from '../../../atoms/Icons/IconThreePoints'
import Modal from '../../../molecules/Modal'
import { formatDate } from '../../../utils/formatDate'
import {
  ContainerShelf,
  ContainerShelfColumn
} from '../../Professionals/style'
import {
  AlignItensProjects,
  ContainerProjectColumn,
  ContainerShelfProjects
} from '../style'

const ProjectsListing = ({ project }: any) => {
  const navigate = useNavigate()
  const [modal, setModal] = useState<boolean>(false)

  return (
    <ContainerShelfProjects>
      <ContainerProjectColumn width='28%'>
        <AlignItensProjects>{project.name}</AlignItensProjects>
      </ContainerProjectColumn>
      <ContainerProjectColumn width='25%'>
        {project.project_type.name}
      </ContainerProjectColumn>
      <ContainerProjectColumn width='22%'>
        {formatDate(project.date_start)}
      </ContainerProjectColumn>
      <ContainerShelfColumn width='20%' justify='center' gap='3em'>
        <div className='status'>
          <Badge
            style={{ width: '157px' }}
            label={project.status.name}
            variant='filled'
            bgColor={project.status.color.button_color}
            typographyProps={{
              color: project.status.color.text_color
            }}
          />
        </div>
        <IconThreePoints onClick={() => setModal((prev) => !prev)} />
        {modal && (
          <Modal
            optionOne='Editar'
            eventOne={() => navigate('/home')}
            optionTwo='Excluir '
          />
        )}
      </ContainerShelfColumn>
    </ContainerShelfProjects>
  )
}

export default ProjectsListing
