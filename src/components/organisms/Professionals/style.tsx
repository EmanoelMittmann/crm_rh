import styled from "styled-components";

export const ContainerMain = styled.div`
    width: 100%;
    height: auto;
`

export const ContainerChildren = styled.div<IContainerRowProps>`
    display: flex;
    width: inherit;
    margin-bottom:2.5em;
    padding-left:${props => props.paddingLeft} ;
    padding-right: ${props => props.paddingRight};
    gap: ${props => props.gap};
`