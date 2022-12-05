import styled from "styled-components";

export const ContainerMain = styled.button<IButtonColorProps>`
  width: 19em;
  height: 44px;
  font-family: 'Poppins';
  font-weight: 600;
  border: none;
  margin: 5px;
  border-radius: 8px;
  display: flex;
  padding-left: 1em;
  justify-content: flex-start;
  align-items: center;
  gap:8px;
  background-color: #F2F5F8;
  transition: all 300ms ease;
  cursor: pointer;

  svg path{
    transition: all 300ms ease;
  }

  &:hover{
    color: ${(props) => props.color};
    svg path{
      fill: ${(props) => props.fill};
    }
  }
`;
