import { useContext } from 'react'
import { useParams } from 'react-router-dom'

import { Typography } from '@stardust-ds/react'
import { List } from 'contexts'
import { HistoricProps } from 'contexts/List/Hours/Professional/types'
import { theme } from 'styles'

import { Badge } from 'components/atoms'
import { Table } from 'components/organisms/Tables'
import { formatDate } from 'components/utils/formatDate'

import { useDebounce } from 'hooks'

import { Columns, MainDetails, Row } from '../style'

const DetailsHours = () => {
  const { details, handleDetails } = useContext(
    List.ProfessionalHours.Context
  )
  const professional = details.find((item: HistoricProps) => ({
    id: item.id
  }))

  const { id } = useParams()
  function getDetails(id: number) {
    handleDetails(id)
  }

  useDebounce({
    fn: () => getDetails(Number(id)),
    listener: [id]
  })

  return (
    <MainDetails>
      <Columns>
        <Row content='space-between' align='center'>
          <Typography type='h3' color={theme.neutrals.gray8}>
            Lançamento #{professional?.id}
          </Typography>
          {professional?.status && (
            <Badge.Hours status={professional.status} />
          )}
        </Row>
        <Row content='space-between'>
          <Typography type='h6' color={theme.neutrals.gray6}>
            {professional?.project.name}
          </Typography>
          <Typography
            type='p2'
            fontStyle='italic'
            color={theme.neutrals.gray5}
          >
            Lançado {formatDate(String(professional?.launch_date))}
          </Typography>
        </Row>
        <Row>
          <Table.DetaislHoursProfessional />
        </Row>
        <Row>
          <Typography type='h3' color={theme.neutrals.gray8}>
            Histórico
          </Typography>
        </Row>
        <Row>
          <Table.DetaislHoursHistoric />
        </Row>
      </Columns>
    </MainDetails>
  )
}

export default DetailsHours
