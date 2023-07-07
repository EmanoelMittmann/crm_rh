import styled from 'styled-components'
import { theme } from 'styles'

export const ContainerModal = styled.div`
  width: 48em;
  height: 700px;
  border-radius: 16px;
  background-color: ${theme.neutrals.pureWhite};
  display: flex;
  top: 50%;
  left: 33%;
  position: fixed;
  transform: translate(-20%, -50%);
  padding-top: 0.8em;
  z-index: 10;
  box-shadow: 0px 5px 10px 10px ${theme.neutrals.gray3};
`
export const Columns = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Row = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin: auto;
  width: 90%;
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
export const ContainerAbsolute = styled.div`
  width: 100%;
  height: 510px;
`
export const TitleProject = styled.h3`
  color: ${theme.neutrals.gray8};
  font-size: 1.2rem;
  font-weight: 500;
`
export const ContainerDate = styled.div`
  width: 93%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid rgba(204, 209, 214, 1);
  padding-bottom: 2em;
`
