import styled from 'styled-components'
import { theme } from 'styles'

export const ContainerModal = styled.div`
  width: 48em;
  height: 580px;
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

export const ContainerRow = styled.div`
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
export const Text = styled.p`
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
  padding-left: ${(props) => props.title};
  color: ${(props) => props.color};
`
export const Title = styled.h4`
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
  padding-left: ${(props) => props.title};
  color: ${(props) => props.color};
`
export const Container = styled.div`
  width:492px;
  align-items: start;
  `
export const ContainerOne = styled.div`
  width:450px;
  align-items: start;
  `
