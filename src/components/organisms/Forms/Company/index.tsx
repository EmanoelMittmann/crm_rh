import {
  TypeCompany,
  Company,
  Bank,
  Address,
  Cadastration
} from './Sections'
import { Divider, Main } from './style'

export default () => {
  return (
    <Main>
      <TypeCompany />
      <Company />
      <Divider />
      <Bank />
      <Divider />
      <Address />
      <Divider />
      <Cadastration />
    </Main>
  )
}

export type { FormProps } from './types'
