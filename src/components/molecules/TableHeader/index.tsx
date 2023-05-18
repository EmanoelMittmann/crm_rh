import { Icon } from 'components/atoms'

import { Column, ColumnText, Container } from './style'
import type { TemplateProps, HeaderProps } from './types'

/**
 *
 * @param template exemplo: '1fr 1fr 1fr'
 * Recebe as mesmas propriedades de grid-template-columns.
 */
export const TableHeader = ({
  template,
  headers,
  handleOrder
}: TemplateProps) => {
  return (
    <Container {...{ template }}>
      {headers.map(({ field, label, on = false }) => (
        <Column
          disabled={!on}
          key={field}
          onClick={() => on && handleOrder(field)}
        >
          <ColumnText>{label}</ColumnText>
          {on && <Icon.OrderBy />}
        </Column>
      ))}
    </Container>
  )
}

export type { HeaderProps }
