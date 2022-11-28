import styled from "styled-components";

export const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: absolute;
  width: 444px;
  height: 635px;
  left: 153px;
  top: 133px;
  padding: 2em;
  border-radius: 2px solid rgba(255, 255, 255, 1);

  box-shadow: 0px 0px 80px 0px rgba(3, 42, 102, 0.1);

  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.8) 0%,
      rgba(255, 255, 255, 0.8) 95%
    ),
    linear-gradient(0deg, #ffffff, #ffffff);
`;

export const Containerdatas = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  height: 230px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 100%;
  color: #0066ff;
  gap: 1em;
  flex: none;
  order: 0;
  flex-grow: 0;
`;
