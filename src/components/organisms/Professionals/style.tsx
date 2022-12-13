import styled from "styled-components";

export const ContainerMain = styled.div`
  width: 100%;
  height: auto;
`;

export const ContainerChildren = styled.div<IContainerColumnProps>`
  display: flex;
  width: inherit;
  margin-bottom: 2.5em;
  height: ${(props) => props.height};
  padding-left: ${(props) => props.left};
  padding-right: ${(props) => props.right};
  gap: ${(props) => props.gap};

  .table {
    width: inherit;
    display: flex;
    flex-direction: column;
  }
`;

export const ContainerShelf = styled.div`
  width: 96%;
  height: 4em;
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 10px;
  border: 1px solid #ccd1d6;
  margin: auto;
`;

export const ContainerShelfColumn = styled.div<IContainerColumnProps>`
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

export const AlignItens = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  font-family: "Poppins";
  font-weight: 500;
`;

export const IMG = styled.img`
  width: 3em;
`;

export const Footer = styled.footer`
  margin-top: 25em;
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
