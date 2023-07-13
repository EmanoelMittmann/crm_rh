import styled from 'styled-components'
import { theme } from 'styles'

export const ContainerModal = styled.div`
  width: 45em;
  height: 700px;
  border-radius: 16px;
  background-color: ${theme.neutrals.pureWhite};
  display: flex;
  top: 50%;
  left: 40%;
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
  height: 310px;
`
export const TitleProject = styled.h3`
  color: ${theme.neutrals.gray8};
  font-size: 1.2rem;
  font-weight: 500;
`
export const ContainerData = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 1em;
`

export const Text = styled.p`
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
  padding-left: ${(props) => props.title};
  color: ${(props) => props.color};
  font-size: 1rem;
  font-weight: 400;
  margin-right: 2.5em;
`
export const TextJustification = styled.p`
  white-space: wrap;
  padding-left: ${(props) => props.title};
  color: ${(props) => props.color};
  font-size: 1rem;
  font-weight: 400;
  margin-right: 2.5em;
`
export const ContainerTitles = styled.div`
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1em 0em;
`
export const ContainerTitleJustification = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 1em 0em;
`
export const TextTitle = styled.h4`
  font-family: 'Poppins';
`
export const ContainerButtons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: -2em;
  margin-bottom: 2em;
`
