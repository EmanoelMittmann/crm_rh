import { Section } from './Sections'
import { Divider, Main } from './style'

export default () => {
  return (
    <Main>
      <Section.Personal />
      <Divider />
      <Section.Company />
      <Divider />
      <Section.Bank />
      <Divider />
      <Section.Contract />
      <Divider />
      <Section.Permission />
      <Divider />
      <Section.ExtraHours />
      <Divider />
      <Section.Paper />
      <Divider />
      <Section.Project />
    </Main>
  )
}

export type { FormProps } from './types'
