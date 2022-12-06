import styled from "styled-components";



export const ContainerMain = styled.div`
    height:100vh;
    width: 17em;
    background-color: #F2F5F8;
`

export const ContainerRow = styled.div<IContainerRowProps>`
    display: flex;
    width: 100%;
    height: 15%;
    justify-content: center;
    align-items: center;
    padding-right: ${(props) => props.paddingRight};
    padding-left: ${(props) => props.paddingLeft};
    flex-direction: row;
`
export const ContainerColumn = styled.div<IContainerColumnProps>`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    height: ${(props) => props.height};
    align-items: center;
    background-color: #F2F5F8;
    padding-left: ${(props) => props.left};
    padding-bottom: ${(props) => props.bottom};
    padding-top: ${(props) => props.top};
`
