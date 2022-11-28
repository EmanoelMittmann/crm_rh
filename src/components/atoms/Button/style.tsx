import styled from "styled-components";

export const ContainerMain = styled.button`
  width: 208px;
  height: 44px;
  font-family: 'Poppins';
  font-weight: 600;
  border-radius: 8px;
  display: flex;
  padding-left: 1em;
  justify-content: flex-start;
  align-items: center;
  gap:8px;
  background-color: white;
  transition: all 300ms ease;

  &:hover, svg:hover{
    color: #0066FF;
  }
`;
