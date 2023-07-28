import styled from 'styled-components'
import { theme } from 'styles'

export const ContainerModal = styled.div<{
  width?: string
  height?: string
}>`
  width: ${({ width }) => width};
  min-height: ${({ height }) => height};
  height: auto;
  border-radius: 16px;
  background-color: ${theme.neutrals.pureWhite};
  position: absolute;
  display: flex;
  padding: 2em 0em;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  box-shadow: 0px 5px 10px 10px ${theme.neutrals.gray3};
`
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  overflow: auto;
  border-radius: 15px;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 5;
`
export const Columns = styled.div<{
  gap?: string
  align?: string
  content?: string
  space?: string
}>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: ${({ align }) => (align ? align : 'center')};
  white-space: ${({ space }) => (space ? space : 'nowrap')};
  justify-content: ${({ content }) => content};
  gap: ${({ gap }) => gap};
`

export const Row = styled.div<{ gap?: string }>`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 90%;
  justify-content: space-between;
`
