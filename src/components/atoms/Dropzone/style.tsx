import styled, { css } from 'styled-components'

export const DropContainer = styled.div`
  border: 3px dashed #919eab52;
  border-radius: 8px;
  background-color: #ffffff;
  height: 13em;
  width: 52em;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2em 5em;
  justify-content: center;
`
export const Column = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  white-space: nowrap;
`

export const Span = styled.span`
  cursor: pointer;
  color: #0066ff;
  font-weight: 700;
`

export const Message = styled.h3``

export const Text = styled.h4`
  color: #647482;
  font-weight: 500;

  span {
    color: #2680eb;
    font-weight: 600;
  }
`
