import styled from 'styled-components'

export const ScrollContainer = styled.ul`
  overflow-y: scroll;
  height: 100%;
  max-height: 405px;
  width: 100%;
  margin-bottom: 0.5em;
  border-bottom: 1px solid #ccc;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background-color: #eee;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 20px;
    border: 3px solid #ddd;
    background-color: #ddd;
  }
`
export const ContainerPopover = styled.div`
  position: relative;
  top: 0;
  bottom: 0;
  margin-bottom: 1rem;
  margin-top: 0.6rem;
`
