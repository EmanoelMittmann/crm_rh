import styled from "styled-components";

export const Container = styled.div`
    width: 95%;
    height: 40px;
    background-color: #F2F5F8;
    margin: auto;
    display: flex;
    flex-direction: row;
    border-radius: 8px 8px 0px 0px;
    border: 1px solid #CCD1D6;
`

export const Column = styled.div<IContainerColumnProps>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    display: flex;
    padding-left:${(props) => props.left} ;
    justify-content: flex-start;
    align-items: center;
`

export const ColumnText = styled.p`
    font-weight: 600;
    font-size: 12px;
    color: #5A646E;
    font-family: 'Poppins';
`
