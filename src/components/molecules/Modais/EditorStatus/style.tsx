import styled from 'styled-components'
import { theme } from 'styles'

export const ContainerModal = styled.div`
  width: 30em;
  height: 254px;
  border-radius: 16px;
  background-color: ${theme.neutrals.pureWhite};
  display: flex;
  top: 50%;
  left: 50%;
  position: fixed;
  transform: translate(-25%, -50%);
  padding-top: 1em;
  z-index: 10;
  box-shadow: 0px 5px 10px 10px ${theme.neutrals.gray3};
`

export const Columns = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const Row = styled.div`
  display: flex;
  height: 3em;
  align-items: center;
  flex-direction: row;
  margin: auto;
  width: 80%;
  justify-content: space-between;

  h2 {
    color: ${theme.neutrals.gray8};
  }
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
