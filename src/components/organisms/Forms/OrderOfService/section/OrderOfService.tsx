import { useContext } from 'react'
import { useFormContext, UseFormReturn } from 'react-hook-form'

import { Input } from '@stardust-ds/react'
import { List } from 'contexts'

import { Container, Main } from '../styles'
import { FormOrderProps } from '../types'

export const OrderOfService = () => {
  const {
    register,
    watch,
    setValue,
    formState: { errors }
  }: UseFormReturn<FormOrderProps> = useFormContext()

  const {
    meta,
    orderOfService,
    navigateTo,
    handleSearch,
    isLoading
  } = useContext(List.OrderOfService.Context)

  return (
    <h1>Criar O.S </h1>
    //  <Main>
    //     <Container>
    //         <Input
    //             value={meta.search}
    //             width={230}
    //             placeholder='Buscar...'
    //             onChange={()=> {}}
    //         />
    //     </Container>
    // </Main>
  )
}
