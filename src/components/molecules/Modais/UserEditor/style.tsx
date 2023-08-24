import styled from 'styled-components'
import { theme } from 'styles'

import { IContainerColumnProps } from 'types'

export const ContainerModal = styled.div`
  width: 452px;
  height: auto;
  border-radius: 16px;
  background-color: ${theme.neutrals.pureWhite};
  display: flex;
  top: 50%;
  left: 50%;
  position: fixed;
  transform: translate(-50%, -50%);
  z-index: 10;
  box-shadow: 0px 5px 10px 10px ${theme.neutrals.gray3};
`
export const Columns = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
export const Columns01 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 1rem;
`

export const Row = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin: 1.5rem 1.5rem 0.5rem 1.5rem;

  h2 {
    color: ${theme.neutrals.gray8};
  }
`
export const RowUser = styled.div`
  display: flex;
  height: 55px;
  align-items: center;
  flex-direction: row;
  margin: auto;
  width: 90%;
  justify-content: space-between;
  margin: 0.5rem 1.5rem 0.5rem 1.5rem;

  h2 {
    color: ${theme.neutrals.gray8};
  }
  background-color: ${theme.neutrals.gray1};
  border-radius: 10px;
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

export const ContainerShelfColumn = styled.div<IContainerColumnProps>`
  width: 90%;
  padding-left: ${(props) => props.left};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${(props) => props.gap};
  font-size: 0.875rem;
  overflow-x: hidden;

  .status {
    width: 8em;
  }
  .statusProject {
    width: 8em;
  }
`

export const Text = styled.p`
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
  padding-left: ${(props) => props.title};
  color: ${(props) => props.color};
`
export const TextHours = styled.p`
  align-items: flex-end;
  white-space: nowrap;
  padding-left: ${(props) => props.title};
  color: ${(props) => props.color};
`

export const Image = styled.img`
  width: 3em;
  margin-left: 10px;
  border-radius: 50%;
`
export const TextJob = styled.p`
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
  font-weight: 700;
  font-size: 10px;
  padding-left: ${(props) => props.title};
  color: ${(props) => props.color};
`

export const TeamJobName = styled.div`
  width: 90%;
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
`

export const Rh = styled.div`
  width: 100%;
  border-top: 1px solid ${theme.neutrals.gray3};
  margin-top: 0.8rem;
`
export const ContainerButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`
