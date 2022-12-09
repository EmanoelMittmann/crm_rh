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

    .table{
        width: inherit;
        display: flex;
        flex-direction: column;
    }
`

export const ContainerShelf = styled.div`
    width: 95%;
    height: 4em;
    display: flex;
    align-items: center;
    flex-direction: row;
    padding: 10px;
    border: 1px solid #CCD1D6;
    margin: auto;
`

export const ContainerShelfColumn = styled.div<IContainerColumnProps>`
    width: ${(props) => props.width};
    padding-left: ${(props) => props.left};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: flex;
    justify-content: ${props => props.justify};
    align-items: center;
    gap:${(props) => props.gap};

    .status{
        width: 8em;
    }
`

export const AlignItens = styled.div`
    display: flex;
    align-items: center;
    gap: 1em;
    font-family: 'Poppins';
    font-weight: 500;
`

export const IMG = styled.img`
    width: 3em;
`