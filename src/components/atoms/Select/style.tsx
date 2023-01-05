import styled from "styled-components";
import { ISelectStylesProps } from "../../../react-app-env";

export const ContainerSelect = styled.select<ISelectStylesProps>`
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  border: 1px solid #acb4ba;
  border-radius: 4px;
  color: #acb4ba;
  font-family: "Poppins";
  padding-left: 1em;
  font-weight: 500;
  appearance: none;
  -webkit-appearance: none;
  background-image: url('Vector.png');
  background-repeat: no-repeat;
  background-position: calc(100% - 12px) center;;
  background-size: 10px;
`;

export const Option = styled.option`
  font-family: "Poppins";
  font-weight: 500;
`;

export const Master = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 4px;
`
