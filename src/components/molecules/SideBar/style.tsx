import styled from 'styled-components'
import { theme } from 'styles'
import { IContainerRowProps, IContainerColumnProps } from 'types'

export const ContainerMain = styled.div`
  height: 100vh;
  width: 17rem;
  background-color: ${theme.neutrals.gray1};
  position: fixed;
  z-index: 1;
`

export const ContainerRow = styled.div<IContainerRowProps>`
  display: flex;
  width: 100%;
  height: 15%;
  justify-content: center;
  align-items: center;
  padding-right: ${(props) => props.paddingRight};
  padding-left: ${(props) => props.paddingLeft};
  flex-direction: row;
`
export const ContainerColumn = styled.div<IContainerColumnProps>`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  height: ${(props) => props.height};
  align-items: center;
  padding-left: ${(props) => props.left};
  padding-bottom: ${(props) => props.bottom};
  padding-top: ${(props) => props.top};
`
