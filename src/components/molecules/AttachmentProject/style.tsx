import styled from "styled-components";

export const ContainerRow = styled.div<{ left?: string }>`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  padding-left: ${(props) => props.left};
  gap: 2em;
  .container_select {
    margin-bottom: 0.5em;
  }
`;

export const Table = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  width: 96%;
  height: 30px;
  background-color: #f2f5f8;
  margin: auto;
  display: flex;
  flex-direction: row;
  border-radius: 8px 8px 0px 0px;
  border: 1px solid #ccd1d6;
`;

export const Column = styled.div<IContainerColumnProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: flex;
  padding-left: ${(props) => props.left};
  justify-content: flex-start;
  align-items: center;
`;
