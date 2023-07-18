import styled from 'styled-components'
import { theme } from 'styles'

import { IContainerColumnProps } from 'types'

interface TemplateProps {
  template: string
}

export const Container = styled.div<TemplateProps>`
  width: 100%;
  height: 3.3rem;
  padding: 0 1rem;
  background-color: ${theme.neutrals.gray1};
  margin: auto;
  display: grid;
  grid-template-columns: ${({ template }) => template};
  border: 1px solid ${theme.neutrals.gray3};
  border-radius: 0.5rem 0.5rem 0 0;
`

export const Column = styled.button<IContainerColumnProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: flex;
  padding: 0.5rem;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  color: ${theme.neutrals.gray6};

  :disabled {
    cursor: initial;
  }

  :hover {
    color: ${theme.neutrals.gray8};
  }
`

export const ColumnText = styled.p`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  white-space: break-spaces;
  font-weight: 600;
  font-size: 12px;
  font-family: 'Poppins';
`
export const ContainerChecked = styled.p`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`
