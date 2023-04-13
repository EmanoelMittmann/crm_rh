import styled from 'styled-components'

export const ContainerMain = styled.button`
  width: 180px;
  height: 35px;
  font-family: 'Poppins';
  font-weight: 600;
  border-radius: 25px;
  display: flex;
  padding-left: 1em;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  color: #000;
  background-color: #ffffff;
  transition: all 300ms ease;
  border: 1px solid #e5e5e5;

  &:hover,
  svg:hover {
    color: #0066ff;
  }
`

export const ContainerButtonLights = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: -17em;
  margin-right: 3em;
  border-radius: 1px solid #fff;
`
