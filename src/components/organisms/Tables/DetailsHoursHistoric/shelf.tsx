import { HistoricProps } from 'contexts/List/Hours/Professional/types'

import { Badge } from 'components/atoms'
import { formatDate } from 'components/utils/formatDate'

import { ContainerShelf, ContainerShelfColumn, Text } from '../style'
import { ShelfProps } from '../types'

export const Shelf = ({
  config,
  props
}: ShelfProps<HistoricProps>) => {
  const overtimeApprovalHistory = props.historic.map((item: any) => {
    return (
      <ContainerShelf key={item.id} template={config.template}>
        <ContainerShelfColumn>
          <Text>{formatDate(item.updated_at)}</Text>
        </ContainerShelfColumn>
        <ContainerShelfColumn right='-0.5em'>
          <Text>{item.justification}</Text>
        </ContainerShelfColumn>
        <ContainerShelfColumn>
          {item.status && (
            <Badge.Hours status={item.status} w='100%' />
          )}
        </ContainerShelfColumn>
      </ContainerShelf>
    )
  })

  return <>{overtimeApprovalHistory}</>
}
