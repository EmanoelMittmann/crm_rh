import styled from 'styled-components'
import { theme } from 'styles'

export const ContainerModal = styled.div<{ width?: string }>`
  width: ${({ width }) => (width ? width : '30em')};
  height: 230px;
  border-radius: 16px;
  background-color: ${theme.neutrals.pureWhite};
  position: absolute;
  display: flex;
  padding-top: 1em;
  top: 60%;
  left: 45%;
  transform: translate(-24%, -50%);
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
export const Columns = styled.div<{ gap?: string; content?: string }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  justify-content: ${({ content }) => content};
  gap: ${({ gap }) => gap};
`

export const Row = styled.div<{ gap?: string }>`
  display: flex;
  height: 3em;
  align-items: center;
  flex-direction: row;
  gap: ${({ gap }) => gap};
  margin: auto;
  width: 80%;
  justify-content: space-between;

  h2 {
    color: ${theme.neutrals.gray8};
  }
`
export const RowButton = styled.div<{ gap?: string }>`
  display: flex;
  height: 3em;
  align-items: center;
  flex-direction: row;
  gap: ${({ gap }) => gap};
  margin: auto;
  width: 80%;
  justify-content: space-between;

  h2 {
    color: ${theme.neutrals.gray8};
  }
  margin-bottom: 2em;
`
