import styled from 'styled-components'

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
  gap: 8px;
  background-color: #f2f5f8;
  transition: all 300ms ease-in-out;
  cursor: pointer;

  svg path {
    transition: all 300ms ease;
  }

  &:hover {
    color: ${(props) => props.color};
    animation: cubic-bezier(0.95, 0.05, 0.795, 0.035);
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
  transition:all 300ms ease;
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
`
