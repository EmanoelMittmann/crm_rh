import styled from 'styled-components'
import { theme } from 'styles'

export const ContainerModal = styled.div`
  width: 48em;
  height: 700px;
  border-radius: 16px;
  background-color: ${theme.neutrals.pureWhite};
  display: flex;
  top: 50%;
  left: 50%;
  position: fixed;
  transform: translate(-50%, -50%);
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

  .professional {
    display: flex;
    flex-direction: column;
  }
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
export const ContaineDetails = styled.p`
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
  margin-left: 1em;
  width: 492px;
  align-items: start;
`
export const ContainerOne = styled.div`
  margin-left: 1em;
  width: 450px;
  align-items: start;
`

export const ContainerAbsolute = styled.div`
  height: 600px;
`

export const TableLine = styled.div`
  display: flex;
  width: 90%;
  flex-wrap: wrap;
  border-bottom: 1.5px solid #eff2f4;
  margin-left: 2em;
  &:last-child {
    border-bottom: none;
  }
`

export const Image = styled.img`
  width: 3em;
  border-radius: 50%;
`
export const ProfessionalJob = styled.div`
  font-size: 0.8em;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
`

export const ContainerDataUser = styled.div`
  width: 45%;
  display: flex;
  flex-direction: row;
  margin: 0.5em 1em 0 0;
`

export const ProfessionalName = styled.span`
  display: flex;
  align-items: center;
  white-space: nowrap;
  font-size: 0.7em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: 1350px) {
    font-size: 12px;
  }
`
