import styled from "styled-components";

export const ContainerMain = styled.button<IButtonColorProps>`
  width: 14em;
  height: 44px;
  font-family: "ligth";
  font-weight: 600;
  font-size: 15px;
  text-align: center;
  border: none;
  margin: 5px;
  border-radius: 35px;
  display: flex;
  padding-left: 1em;
  justify-content: flex-start;
  align-items: center;
  gap: 8em;
  background-color: #1ECB4F;
  color: white;
  padding: 0 1em 0 3.5em;
  transition: all 300ms ease-in-out;
  cursor: pointer;

  svg path {
    transition: all 300ms ease;
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
  background-color: #1ECB4F;
  color: white;
  box-shadow: 0px 5px 10px #1eff0024;
  transition:all 300ms ease;
  svg path{
    fill: white;
  }

  `}
`;
