import styled from 'styled-components'
import { theme } from 'styles'

export const ContainerModal = styled.div`
  width: 610px;
  height: 630px;
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

export const Row = styled.div`
  display: flex;
  height: 3em;
  align-items: center;
  flex-direction: row;
  margin: auto;
  width: 93%;
  justify-content: space-between;

  h2 {
    color: ${theme.neutrals.gray8};
  }
`
export const RowButtons = styled.div`
  width: 563px;
  display: flex;
  align-items: center;
  flex-direction: row;
  margin: auto;
  justify-content: space-between;
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
  width: 563px;
  height: 404px;
  margin-left: 1.5em;
  margin-bottom: -1.5em;
`
export const ContainerWap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  height: 44px;
  margin-bottom: 5px;

  &:last-child {
    margin-bottom: 1em;
  }
`
export const ContainerLabelProfessional = styled.div`
 width: 270px;
  height: 44px;
  border-radius: 8px;
  display: flex;
  font-size: 12px;
  align-items: center;
  justify-content: space-between;

  svg {
    margin-left: 3em;
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
  align-items: center;
  justify-content: space-between;
  margin-right: 13.3em;
`
export const ContainerFooter = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-left: 2.5em;
`
export const Footer = styled.div`
  display: flex;
  height: 22.7px;
`
