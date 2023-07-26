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
  allProfessionalChecked,
  toggleCheckedAll
}: TemplateProps) => {
  return (
    <Container {...{ template }}>
      {headers.map(({ field, label, on, checked = false }) => (
        <Column type='button' disabled={!on} key={field}>
          {checked && (
            <ContainerChecked>
              <Inputs.Check
                checked={allProfessionalChecked}
                onChange={() =>
                  toggleCheckedAll &&
                  toggleCheckedAll(!allProfessionalChecked)
                }
              />
            </ContainerChecked>
          )}
          <ColumnText>
            {label}
            {on && (
              <div onClick={() => on && handleOrder(field)}>
                {' '}
                <Icon.OrderBy />
              </div>
            )}
          </ColumnText>
        </Column>
      ))}
    </Container>
  )
}

export type { HeaderProps }
