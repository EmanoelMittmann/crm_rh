import styled from "styled-components";
import { ISelectStylesProps } from "../../../react-app-env";

export const ContainerSelect = styled.select<ISelectStylesProps>`
    width: ${(props) => props.w};
    height: ${(props) => props.h};
    border: 1px solid #ACB4BA;
    border-radius: 4px;
    color:#ACB4BA;
    font-family: 'Poppins';
    padding-left: 1em;
    font-weight: 500;
`

export const Option = styled.option`
    font-family: 'Poppins';
    font-weight: 500;
`