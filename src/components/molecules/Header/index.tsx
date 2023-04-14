import { Column, ColumnText, Container } from './style'

const Header = () => {
  return (
    <>
      <Container>
        <Column width='24%' left='1em'>
          <ColumnText>Nome</ColumnText>
        </Column>
        <Column width='15%'>
          <ColumnText>Cargo</ColumnText>
        </Column>
        <Column width='20%'>
          <ColumnText>Email</ColumnText>
        </Column>
        <Column width='12%'>
          <ColumnText>Telefone</ColumnText>
        </Column>
        <Column width='10%'>
          <ColumnText>Local</ColumnText>
        </Column>
        <Column width='19%'></Column>
      </Container>
    </>
  )
}

export default Header
