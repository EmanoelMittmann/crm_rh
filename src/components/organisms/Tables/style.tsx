import styled from 'styled-components'
import { theme } from 'styles'

import type { TemplateProps } from './types'
import { IContainerColumnProps } from 'types'

export const Main = styled.div`
  width: 100%;
`

export const LoadingWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 4rem;
`

export const ContainerShelf = styled.div<TemplateProps>`
  width: 100%;
  min-height: 4rem;
  display: grid;
  align-items: center;
  padding: 0px 22px;
  border: 1px solid #ccd1d6;
  grid-template-columns: ${({ template }) => template};
  //gap: 1rem;
  color: ${theme.neutrals.gray7};
  overflow-x: auto;

  :last-child {
    border-radius: 0 0 0.5rem 0.5rem;
  }
`
export const ShelfHover = styled.div`
  :hover {
    background-color: ${theme.neutrals.gray2};
    cursor: pointer;
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
  overflow-x: hidden;

  .status {
    width: 8em;
  }
  .statusProject {
    width: 8em;
  }
`

export const Text = styled.p`
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
  padding-left: ${(props) => props.title};
  color: ${(props) => props.color};
`
export const Image = styled.img`
  width: 2.5em;
  border-radius: 50%;
`
