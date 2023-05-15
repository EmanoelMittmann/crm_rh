import styled from 'styled-components'
import { theme } from 'styles'
import { IContainerRowProps } from 'types'

export const Main = styled.div`
  width: 60rem;
  height: auto;
  margin-bottom: 2rem;
  border: 1px solid ${theme.neutrals.gray3};
  border-radius: 8px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  color: ${theme.neutrals.gray6};

  h3 {
    color: ${theme.neutrals.gray9};
  }
`

export const ContainerRow = styled.div<IContainerRowProps>`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: ${({ align }) => align ?? 'flex-start'};
  gap: ${(props) => props.gap};
`

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 50%;
  gap: 1rem;
`

export const ColumnContainer = styled.div`
  width: 50%;
  gap: 1rem;
  display: grid;
  padding-left: 1.5rem;
`

export const Divider = styled.hr`
  border-top: 1px solid ${theme.neutrals.gray2};
  width: 100%;
  margin: 2rem 0rem;
`

export const Text = styled.p`
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
  width: 10em;
  font-size: 11px;
  padding-left: ${(props) => props.title};
  color: ${(props) => props.color};
`
export const TextJob = styled.p`
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  font-size: 9px;
  padding-left: ${(props) => props.title};
  color: ${(props) => props.color};
`

export const TeamJobName = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
`

export const Image = styled.img`
  width: 2em;
  border-radius: 50%;
`
