import styled from 'styled-components'
import { theme } from 'styles'

interface TemplateProps {
  template: string
}

export const Container = styled.div<TemplateProps>`
  width: 100%;
  height: 2.5rem;
  padding: 0 1rem;
  background-color: ${theme.neutrals.gray1};
  margin: auto;
  display: grid;
  grid-template-columns: ${({ template }) => template};
  border: 1px solid ${theme.neutrals.gray3};
  border-radius: 0.5rem 0.5rem 0 0;
`

export const Column = styled.div<IContainerColumnProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: flex;
  padding: 0.5rem;
  align-items: center;
`

export const ColumnText = styled.p`
  font-weight: 600;
  font-size: 12px;
  color: ${theme.neutrals.gray6};
  font-family: 'Poppins';
`
