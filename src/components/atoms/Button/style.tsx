import styled from "styled-components";

export const ContainerMain = styled.button<IButtonColorProps>`
  width: 18em;
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
  transition: all 300ms ease-in-out;
  cursor: pointer;

  svg path{
    transition: all 300ms ease;
  }

  &:hover {
    color: ${(props) => props.color};
    svg path{
      fill: ${(props) => props.fill};
    }
  }
  
  &:focus-within{
    background-color: ${(props) => props.bgActive};
    color: ${(props) => props.colorActive};
    box-shadow: 0px 5px 10px #0066ff25;
    svg path{
      fill: ${(props) => props.fillActive};
    }
    &::before{
      content: '';
      width: 6px;
      border-radius: 0px 4px 4px 0px;
      height: 3em;
      transform: translateX(-2.2em);
      background-color: #0066ff;
    }
    }

`;
