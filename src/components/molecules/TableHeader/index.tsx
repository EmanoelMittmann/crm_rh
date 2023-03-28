import { Column, ColumnText, Container } from './style'

interface TemplateProps {
  template: string
  titles: string[]
}

/**
 *
 * @param template exemplo: '1fr 1fr 1fr'
 * Recebe as mesmas propriedades de grid-template-columns.
 */
export const TableHeader = ({ template, titles }: TemplateProps) => {
  return (
    <Container {...{ template }}>
      {titles.map((title, index) => (
        <Column key={index}>
          <ColumnText>{title}</ColumnText>
        </Column>
      ))}
    </Container>
  )
}
