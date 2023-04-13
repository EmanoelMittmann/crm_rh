import { Badge } from '@stardust-ds/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IconThreePoints } from '../../../atoms/Icons/IconThreePoints'
import Modal from '../../../molecules/Modal'
import { ContainerShelfColumn, IMG } from '../../Professionals/style'
import {
  AlignItensProjects,
  ContainerProjectColumn
} from '../../Projects/style'
import { ContainerShelfTime } from '../style'

const TimeListing = ({ time }: any) => {
  const navigate = useNavigate()
  const [modal, setModal] = useState<boolean>(false)

  return (
    <ContainerShelfTime>
      <ContainerProjectColumn width='28%'>
        <AlignItensProjects>
          <IMG src={time.avatar} />
          {time.name}
        </AlignItensProjects>
      </ContainerProjectColumn>
      <ContainerProjectColumn width='25%'>
        {time.job}
      </ContainerProjectColumn>
      <ContainerProjectColumn width='12%'>
        {time.hours}
      </ContainerProjectColumn>
      <ContainerProjectColumn width='10%'>
        {time.status}
      </ContainerProjectColumn>
      <ContainerShelfColumn width='20%' justify='center' gap='3em'>
        <div className='status'>
          <Badge
            label={time.status ? 'Ativo' : 'Inativo'}
            variant='flat'
            bgColor={time.status ? '#1ECB4F26' : '#FF354126'}
            typographyProps={{
              textAlign: 'center',
              color: time.status ? '#1ECB4F' : '#FF3541'
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
    </ContainerShelfTime>
  )
}
export default TimeListing
