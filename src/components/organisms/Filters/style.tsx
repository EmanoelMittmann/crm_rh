import styled from 'styled-components'

import { IContainerColumnProps } from 'types'

export const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  overflow-x: auto;
  gap: 1rem;
`

export const Container = styled.div<IContainerColumnProps>`
  display: flex;
  align-items: flex-end;
  width: ${(props) => props.width && props.width};
  height: ${(props) => props.height};
  padding-left: ${(props) => props.left};
  padding-right: ${(props) => props.right};
  gap: ${(props) => props.gap};
`

export const ContainerDate = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 1rem;
  margin-left: -1rem;
`
