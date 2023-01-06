import styled from "styled-components";

export const ContainerMain = styled.div`
  width: 100%;
  height: auto;
`;

export const ContainerChildren = styled.div<IContainerColumnProps>`
  display: flex;
  width: 100%;
  margin-bottom: 2.5em;
  height: ${(props) => props.height};
  padding-left: ${(props) => props.left};
  padding-top: ${(props) => props.top};
  padding-right: ${(props) => props.right};
  gap: ${(props) => props.gap};
`;

export const ContainerRegisterProfessional = styled.div`
  width: 60em;
  height: 40em;
  overflow-y: scroll;
  overflow-x: hidden;
  margin-left: 2em;
  border: 1px solid #ccd1d6;
  border-radius: 8px;
`;

export const ContainerRow = styled.div<IContainerRowProps>`
  padding-left: 1.5em;
  display: flex;
  width: 98%;
  flex-direction: row;
  gap: ${(props) => props.gap};
  margin-bottom: 2em;

  @media screen and (max-width: 1650px) {
    width: 80%;
  }
`;

export const BorderBottom = styled.hr`
  background-color:#E9EBEE ;
  width: 96%;
  margin: auto;
`;
