import { Icon, Inputs } from 'components/atoms'

import {
  Column,
  ColumnText,
  Container,
  ContainerChecked
} from './style'
import type { TemplateProps, HeaderProps } from './types'

/**
 *
 * @param template exemplo: '1fr 1fr 1fr'
 * Recebe as mesmas propriedades de grid-template-columns.
 */
export const TableHeader = ({
  template,
  headers,
  handleOrder,
  handleCheckedAll
}: TemplateProps) => {
  return (
    <Container {...{ template }}>
      {headers.map(({ field, label, on, checked = false }) => (
        <Column
          type='button'
          disabled={!on}
          key={field}
          onClick={() => on && handleOrder(field)}
        >
          <ContainerChecked>
            {checked && on && (
              <Inputs.Check
                onClick={(e) => {
                  e.stopPropagation()
                  handleCheckedAll()
                }}
              />
            )}
          </ContainerChecked>
          <ColumnText>
            {label}
            {on && <Icon.OrderBy />}
          </ColumnText>
        </Column>
      ))}
    </Container>
  )
}

export type { HeaderProps }
