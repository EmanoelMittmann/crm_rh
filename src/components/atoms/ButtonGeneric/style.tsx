import styled from "styled-components";

export const ContainerButton = styled.button<IButtonColorProps>`
    background-color: ${props => props.bgColor};
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    text-align: center;
    color: ${(props) => props.color};
    border-radius: ${(props) => props.bRadius};
    border: none;
    margin-left: ${props => props.left};
    cursor: pointer;
`