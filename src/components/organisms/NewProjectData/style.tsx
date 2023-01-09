import styled from "styled-components";

export const ContaineNew = styled.div`
  display: flex;
  flex-direction: row;
  width: 65%;
  height: 100vh;
  border: 1px solid #c0baba;
  border-radius: 14px;
  margin-left: 20.5em;
  margin-top: 2em;
`;

export const ContainerBase = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  top: 5em;
  margin-left: 5em;
`;

export const ContaineNewRegistration = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const ContaineNewposition = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2px;
  margin-left: 5em;
  gap: 32px;
  position: absolute;
  width: 65%;
  height: 780px;
  left: 272px;
  top: 147px;
  background: #ffffff;
  border: 1px solid #ccd1d6;
  border-radius: 8px;
`;

export const Container = styled.div`
  width: 87%;
  height: 150px;
`;

export const ContainerInputs = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 95%;
  margin: -2em 2em 0 2em;
  gap: 2em;
  align-items: center;
`;

export const ContainerInputsSecun = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 96.3%;
  margin: -2em 2em 0 2em;
  gap: 2em;
  align-items: center;
  padding-bottom: 3em;
  position: relative;
  border-bottom: 1px solid #ccd1d6;
`;
export const ContainerTime = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: row;
  align-items: center;
  width: 60%;
  margin: -2em 2em 0 2em;
  gap: 2em;
`;

export const ContainerButtonsFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  margin-left: 4em;
  margin-top: 53em;
`;

export const ContainerChildrenTable = styled.div<IContainerColumnProps>`
  display: flex;
  flex-direction: column;
  margin-top:-6em;
  width: 100%;
  margin-bottom: 3.5em;
  height: ${(props) => props.height};
  padding-left: ${(props) => props.left};
  padding-right: ${(props) => props.right};
  gap: ${(props) => props.gap};
`;

export const ContainerTimeAvatar = styled.div`
  display: flex;
  flex-direction: row;
`;
