import { IconArrowsPosition } from '../../atoms/Icons/IconArrowsPosition'
import InputIconPosition from '../../atoms/InputIconPosition'
import { Column, ColumnText, Container } from './style'

const HeaderJobsProjects = () => {
  return (
    <>
      <Container>
        <Column width='28%' left='1em'>
          <ColumnText>Proficional</ColumnText>
          <InputIconPosition Icon={<IconArrowsPosition />} />
        </Column>
        <Column width='25%'>
          <ColumnText>Cargo</ColumnText>
          <InputIconPosition Icon={<IconArrowsPosition />} />
        </Column>
        <Column width='25%'>
          <ColumnText>Horas mensais</ColumnText>
          <InputIconPosition Icon={<IconArrowsPosition />} />
        </Column>
        <Column width='15%'>
          <ColumnText>Status</ColumnText>
          <InputIconPosition Icon={<IconArrowsPosition />} />
        </Column>
      </Container>
    </>
  )
}

export default HeaderJobsProjects
