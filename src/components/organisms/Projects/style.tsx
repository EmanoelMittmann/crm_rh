import styled from "styled-components";

export const ContainerMain = styled.div`
  width: 93.5%;
  height: auto;
`;

export const ContainerChildrenProjects = styled.div<IContainerColumnProps>`
  display: flex;
  width: 96%;
  margin-bottom: 2.5em;
  align-items: center;
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
  margin-left: 9.3em;
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
    width: 5em;
  }
`;

export const AlignItensProjects = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  font-family: "Poppins";
  font-weight: 500;
`;
export const ContainerShelfProjects = styled.div`
  width: 96%;
  height: 4em;
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 10px;
  border: 1px solid #ccd1d6;
  margin: auto;
`;

export const ContainerFooter = styled.div`
  margin-left: 2em;
`;
