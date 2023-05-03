import styled from 'styled-components'
import { theme } from 'styles'

export const ContainerModal = styled.div`
  width: 30em;
  height: 254px;
  border-radius: 16px;
  background-color: ${theme.neutrals.pureWhite};
  position: absolute;
  display: flex;
  padding-top: 1em;
  top: 50%;
  left: 50%;
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
