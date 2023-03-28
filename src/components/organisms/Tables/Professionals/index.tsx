import { TableHeader } from 'components/molecules'
import { Shelf } from './shelf'
import { HEADERS, GRID_TEMPLATE } from './constants'
import { Main } from '../style'

import type { ProfessionalProps } from './types'

interface Props {
  data: ProfessionalProps[]
}

export const Professionals = ({ data }: Props) => {
  return (
    <Main>
      <TableHeader titles={HEADERS} template={GRID_TEMPLATE} />
      {data.map((props) => (
        <Shelf key={props.email} {...{ ...props, template: GRID_TEMPLATE }} />
      ))}
    </Main>
  )
}
