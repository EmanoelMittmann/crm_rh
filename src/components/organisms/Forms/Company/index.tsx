import { useForm } from 'react-hook-form'

import {
  TypeCompany,
  Company,
  Bank,
  Address,
  Cadastration
} from './Sections'
import { Divider, Main } from './style'

import { FormProps } from '..'

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
