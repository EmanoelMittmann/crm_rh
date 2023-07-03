import styled from 'styled-components'
import { theme } from 'styles'

export const ContainerModal = styled.div`
  width: 38em;
  height: 680px;
  border-radius: 16px;
  background-color: ${theme.neutrals.pureWhite};
  position: absolute;
  display: flex;
  padding-top: 1em;
  top: 50%;
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
export const ContainerAbsolute = styled.div`
  height: 405px;
  margin-left: 2em;
`
export const ContainerWap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 90%;
  margin-bottom: 0.5em;
  position: relative;

  &:last-child {
    margin-bottom: 1em;
  }
`
export const ContainerLabelProfessional = styled.div`
  width: 23em;
  height: 48px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  font-size: 12px;
  margin: 1px 0em 7px 16px;

  svg {
    margin-left: 1em;
    cursor: pointer;
  }
`

export const IconButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  position: absolute;
  margin-left: 18em;
  svg {
    cursor: pointer;
  }
`
export const TitleComissionProfessional = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0em 11.3em 1em 1em;
`
export const ContainerFooter = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1em;
  width: 100%;
  justify-content: flex-end;
  padding: 0 1em;
`
export const Footer = styled.div`
  display: flex;
  height: 20px;
`
