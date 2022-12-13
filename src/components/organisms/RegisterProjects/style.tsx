import styled from "styled-components";

export const ContainerMain = styled.div`
  width: 100%;
  height: auto;
`;

export const ContainerChildrenProjects = styled.div<IContainerColumnProps>`
  display: flex;
  width: 96%;
  margin-bottom: 2.5em;
  height: ${(props) => props.height};
  padding-left: ${(props) => props.left};
  padding-right: ${(props) => props.right};
  gap: ${(props) => props.gap};

`;

export const ContainerChildrenTable = styled.div<IContainerColumnProps>`
  display: flex;
  flex-direction: column;
  width: inherit;
  margin-bottom: 2.5em;
  height: ${(props) => props.height};
  padding-left: ${(props) => props.left};
  padding-right: ${(props) => props.right};
  gap: ${(props) => props.gap};
`;

export const ContainerProjects = styled.div`
  width: 95%;
  height: 4em;
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 10px;
  border: 1px solid #ccd1d6;
  margin: auto;
`;

export const ContainerProjectColumn = styled.div<IContainerColumnProps>`
  width: ${(props) => props.width};
  padding-left: ${(props) => props.left};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: flex;
  justify-content: ${(props) => props.justify};
  align-items: center;
  gap: ${(props) => props.gap};

  .status {
    width: 8em;
  }
`;

export const AlignItensProjects = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  font-family: "Poppins";
  font-weight: 500;
`;
