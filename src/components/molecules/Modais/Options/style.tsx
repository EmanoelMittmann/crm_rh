import styled from 'styled-components'

export const ContainerModal = styled.div`
  box-shadow: 0px 10px 20px 0px #00000040;
  background-color: #fff;
  width: 144px;
  height: 84px;
  border-radius: 8px;
  position: absolute;
  transform: translate(1.5em, -2.5em);

  .options {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 1em;
    gap: 5px;
  }
`

export const Options = styled.p`
  font-family: 'Poppins';
  cursor: pointer;
  color: #5a646e;
  font-weight: 500;
`
