import styled from "styled-components";

export const ContainerMain = styled.div`
    width: 100%;
    height: 7em;
    background-color: #FFFFFF;
`

export const Children = styled.div<{justify?:string,top?:string,w?:string,align:string}>`
    display: flex;
    width: ${(props) => props.w};
    align-items: ${(props) => props.align};
    padding: ${(props) => props.top};
    justify-content:${(props) => props.justify};
`

export const Avatar = styled.img`
    border-radius: 50%;
    width: 2.5em;
    height: 2.5em;
`
