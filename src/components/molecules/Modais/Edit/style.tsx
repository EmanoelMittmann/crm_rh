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
  transform: translate(90%, 20%);
  box-shadow: 0px 5px 10px 10px ${theme.neutrals.gray3};
`

export const Columns = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const Row = styled.div`
  display: flex;
  height: 2em;
  align-items: center;
  flex-direction: row;
  margin: auto;
  width: 80%;
  justify-content: space-between;

  h2 {
    color: ${theme.neutrals.gray8};
  }
`
