import styled from "styled-components";

export const ContainerMain = styled.button<IButtonColorProps>`
  align-items: center;
  border: none;
  background-color: #f2f5f8;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  font-family: "Poppins";
  font-weight: 600;
  gap: 8px;
  height: 44px;
  justify-content: flex-start;
  margin: 5px;
  padding-left: 1em;
  transition: all 300ms ease-in;
  width: 18em;

  svg path {
    transition: all 300ms ease-in;
  }

  &:hover {
    color: ${(props) => props.color};
    svg path {
      fill: ${(props) => props.fill};
    }
  }

  ${(props) =>
    props.isActive &&
    `
  background-color: #0066ff;
  color: white;
  box-shadow: 0px 5px 10px #0066ff25;
  svg path{
    fill: white;
  }
  &::before{
    content: '';
    width: 5px;
    border-radius: 0px 4px 4px 0px;
    height: 3.5em;
    transform: translateX(-2.2em);
    background-color: #0066ff;
  }
  &:hover {
    color: white;
    svg path {
      fill: white;
    }
  }
  `}
`;
