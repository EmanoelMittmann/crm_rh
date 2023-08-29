import { Main } from 'components/templates'

import { Section } from './Sections'
import { Divider } from './style'

export default () => {
  return (
    <Main>
      <Section.Project />
      <Divider />
      <Section.Team />
    </Main>
  )
}

export type { FormProjectProps } from './types'
export type { FormTeamProps } from '../../Forms/Team/types'
