import { useNavigate } from 'react-router-dom'

import { HoursProps } from 'contexts/List/Hours/Professional/types'

import { Badge } from 'components/atoms'
import { formatDate } from 'components/utils/formatDate'

import {
  ContainerShelfColumn,
  ShelfHover,
  TextProfessional
} from '../style'
import { ShelfProps } from '../types'

export const Shelf = ({ config, props }: ShelfProps<HoursProps>) => {
  const navigate = useNavigate()

  const Details = () => {
    navigate(`/detailsHours/${props.id}`)
  }

  return (
    <>
      <ShelfHover
        template={config.template}
        onClick={() => Details()}
      >
        <ContainerShelfColumn>
          <TextProfessional>{props.id}</TextProfessional>
        </ContainerShelfColumn>
        <ContainerShelfColumn>
          <TextProfessional>
            {formatDate(props.launch_date)}
          </TextProfessional>
        </ContainerShelfColumn>
        <ContainerShelfColumn>
          <TextProfessional>
            {formatDate(props.end_date)}
          </TextProfessional>
        </ContainerShelfColumn>
        <ContainerShelfColumn>
          <TextProfessional> {props.hour_quantity}</TextProfessional>
        </ContainerShelfColumn>
        <ContainerShelfColumn>
          <TextProfessional> {props.project.name}</TextProfessional>
        </ContainerShelfColumn>
        <ContainerShelfColumn>
          <Badge.Hours status={props.status} />
        </ContainerShelfColumn>
      </ShelfHover>
    </>
  )
}
