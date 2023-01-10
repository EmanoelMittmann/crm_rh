import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 5em;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

`;
export const Pagination = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  .threepoints {
    width: 2em;
    height: 2em;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-family: "Poppins";
    font-weight: 500;
    cursor: pointer;
    color: #737d86;
  }
`;

export const Numbers = styled.div<IButtonColorProps>`
  width: 2em;
  height: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-family: "Poppins";
  font-weight: 500;
  cursor: pointer;
  color: #737d86;

  ${(props) =>
    props.isActive
      ? `
  
    outline: 2px solid #0066ff;
    color: #0066ff;
    font-weight: 600;
  `
      : ""}
`;
