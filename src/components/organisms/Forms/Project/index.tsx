import { Section } from './Sections'
import { Divider, Main } from './style'

export default () => {
  return (
    <Main>
      <Section.Project />
      <Divider />
      <Section.Team />
      <Divider />
    </Main>
  )
}

export type { FormProjectProps } from './types'
