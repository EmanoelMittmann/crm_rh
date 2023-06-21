import styled from 'styled-components'
import { theme } from 'styles'

import { IContainerColumnProps, IContainerRowProps } from 'types'

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

export const Divider = styled.hr`
  border-top: 1px solid ${theme.neutrals.gray2};
  width: 100%;
  margin: 2rem 0rem;
`

export const ContainerRow = styled.div<IContainerRowProps>`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: ${({ align }) => align ?? 'flex-start'};
  gap: ${(props) => props.gap};
`

export const Container = styled.div<IContainerColumnProps>`
  display: flex;
  align-items: center;
  width: ${(props) => props.width && props.width};
  height: ${(props) => props.height};
  padding-left: ${(props) => props.left};
  padding-right: ${(props) => props.right};
  gap: ${(props) => props.gap};
`
