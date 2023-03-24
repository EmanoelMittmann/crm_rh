import styled from 'styled-components'
import { theme } from 'styles'

import type { TemplateProps } from './types'

export const Main = styled.div`
  width: 100%;
`

export const ContainerShelf = styled.div<TemplateProps>`
  width: 100%;
  min-height: 4rem;
  display: grid;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccd1d6;
  grid-template-columns: ${({ template }) => template};
  gap: 1rem;
  color: ${theme.neutrals.gray7};
  overflow-x: auto;

  :last-child {
    border-radius: 0 0 0.5rem 0.5rem;
  }
`

export const ContainerShelfColumn = styled.div<IContainerColumnProps>`
  width: ${(props) => props.width};
  padding-left: ${(props) => props.left};
  display: flex;
  justify-content: ${(props) => props.justify};
  align-items: center;
  gap: ${(props) => props.gap};
  font-size: 0.875rem;

  .status {
    width: 8em;
  }
`

export const Image = styled.img`
  width: 3em;
`
