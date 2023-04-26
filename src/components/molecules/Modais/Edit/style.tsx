import styled from 'styled-components'

export const ContainerModal = styled.div`
  width: 30em;
  height: 10em;
  background-color: #fff;
  box-shadow: 1px 0 10px black;
  position: absolute;
  transform: translate(50%, -50%);
`

export const Overlay = styled.div`
  width: 100vw;
  height: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`
