import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { Input } from '@stardust-ds/react'
import { List } from 'contexts'

import { Button, IconGlass } from 'components/atoms'

import { Container, Main } from './style'

export const OrderFormFilter = () => {
  const { meta, handleSearch, checkedAll, setCheckedAll } =
    useContext(List.OrderOfServiceprofessionalOS.Context)

  const handleSelectAll = () => {
    setCheckedAll(!checkedAll)
  }

  const { search } = meta

  return (
    <Main>
      <Container gap='1em'>
        <Input
          width={230}
          placeholder='Buscar...'
          iconLeft={<IconGlass />}
          value={search}
          onChange={(e) => handleSearch(e.target?.value)}
        />
      </Container>
      <Button.New
        text='Selecionar todos'
        onClick={() => {
          handleSelectAll()
        }}
        type='button'
      />
    </Main>
  )
}
