import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 2em;
`;

export const PagesNumber = styled.p<{ Active?: boolean }>`
  font-family: "Poppins";
  font-weight: 500;
  color: #737d86;
  display: flex;
  justify-content: center;
  cursor: pointer;
  transition: all 100ms ease;
  border-radius: 50%;
  width: 1.5em;

  ${(props) =>
    props.Active &&
    `
    font-weight: 600;
    color: #0066FF;
    outline: 3px solid #0066FF;
  `}
`;

export const Container = styled.div`
  font-family: "Poppins";
  font-weight: 500;
  color: #737d86;
  display: flex;
  cursor: pointer;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  align-items: center;
  gap: 1em;
`;

export const Main = styled.div`
  display: flex;
  justify-content: space-between;
  width: 95%;
`;
