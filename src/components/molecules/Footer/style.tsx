import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 5em;
    position: relative;
    top: 20.9em;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    .left{
        display: flex;
        align-items: center;
        gap: 1em;
        cursor: pointer;
    }

    .right{
        display: flex;
        align-items: center;
        gap: 1em;
        cursor: pointer;
    }

`
export const Pagination = styled.div`
    width: 65em;
    display: flex;
    justify-content: center;
`