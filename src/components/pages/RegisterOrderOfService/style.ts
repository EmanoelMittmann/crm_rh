import styled from 'styled-components'
import { theme } from 'styles'

export const Container = styled.div`
  width: 60rem;
  height: 60vh;
  margin-bottom: 2rem;
  border: 1px solid ${theme.neutrals.gray3};
  border-radius: 8px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  color: ${theme.neutrals.gray6};

  h3 {
    color: ${theme.neutrals.gray9};
  }
`

export const ContainerFixed = styled.div`
  width: 81.5%;
  height: 200px;
  margin-bottom: 2rem;
  margin-left: 2em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  top: 0;
  margin-top: 39.6em;
  padding-top: 2em;
  position: absolute;
  border-radius: 8px;
  background-color: ${theme.neutrals.pureWhite};

  z-index: 10;
  box-shadow: 0.3px 5px 3px 2px ${theme.neutrals.gray3};
`

export const ContainerCompany = styled.div`
  width: 80%;
`
export const ConatinerButton = styled.div`
  width: 20%;
  padding-right: 2em;
  margin-top: 5em;
`
