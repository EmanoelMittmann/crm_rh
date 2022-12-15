import styled from "styled-components";

export const ContainerGlobalLogin = styled.div`
  display:flex;
`;

export const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 444px;
  height: 700px;
  left: 153px;
  top: 133px;
  padding: 2em;
  opacity: 0.8;
  border-radius: 2px solid rgba(255, 255, 255, 1);
  border: 2px solid #ffffff;
  box-shadow: 0px 0px 80px 0px rgba(3, 42, 102, 0.1);
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.8) 0%,
      rgba(255, 255, 255, 0.8) 100%
    ),
    linear-gradient(0deg, #ffffff, #ffffff);
  border-radius: 16px;
`;

export const Containerdatas = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 100%;
  color: #0066ff;
  gap: 1.5em;
`;

export const ContainerIconUbistart = styled.div`
  display: flex;
  padding: 1em 0 5em 0;
`;

export const ConstinerCheccked = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 0.5em;
`;

export const ContainerCheckbox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1em;
`;

export const LoginGoogle = styled.div`
  width:95%;
  margin-top: 3em;
  text-align: left;
`;

export const ImgTeam = styled.img`
  min-width: 85%;
`;

export const ContainerButton = styled.div`
  display: flex;
  margin-top: 3em;
`;
