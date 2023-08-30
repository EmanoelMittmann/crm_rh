import styled from 'styled-components'
import { theme } from 'styles'

export const ContainerModal = styled.div<{ width?: string }>`
  width: ${({ width }) => (width ? width : '30em')};
  height: 310px;
  border-radius: 16px;
  background-color: ${theme.neutrals.pureWhite};
  position: fixed;
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
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 4rem;
  }
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 80%;
    font-size: 18px;
    font-weight: 500;
    color: #747679;
    font-family: poppins;
    line-height: 27px;
    align-items: center;
  }
  span {
    color: rgba(255, 53, 65, 1);
    padding: 0 0.3em 0 0;
  }
`

export const RowButton = styled.div<{ gap?: string }>`
  display: flex;
  height: 3em;
  align-items: center;
  flex-direction: row;
  gap: ${({ gap }) => gap};
  margin: auto;
  width: 90%;
  justify-content: space-between;

  h2 {
    color: ${theme.neutrals.gray8};
  }
  margin-top: 1rem;
  margin-bottom: 2em;
`

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 70px;
    height: 50px;
  }
`
export const Icon = styled.div`
  display: flex;
  justify-content: end;
  align-items: flex-end;
  width: 95%;
`
