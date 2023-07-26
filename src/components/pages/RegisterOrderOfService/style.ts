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
  width: 100%;
  max-width: 94.5%;
  height: 140px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  top: 0;
  margin: 0 auto;
  padding-top: 2em;
  margin-bottom: 2em;
  position: relative;
  border-radius: 8px;
  background-color: ${theme.neutrals.pureWhite};
  box-shadow: 0.3px 5px 3px 2px ${theme.neutrals.gray3};

  @media (max-width: 1136px) {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    margin-top: 0.5em;
  }
`

export const ContainerCompany = styled.div`
  display: flex;
`
export const ConatinerButton = styled.div`
  width: 305px;
  display: flex;
  padding-right: 2em;
  margin-top: 2.5em;
`
