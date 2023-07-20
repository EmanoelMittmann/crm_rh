import styled from 'styled-components'

export const Container = styled.div`
  border-radius: 8px;
  border: 1px solid #ccd1d6;
  width: 60%;
  display: flex;
  padding: 0em 1em;
  justify-content: space-between;
  flex-direction: column;
  height: 40em;
  align-items: center;
`

export const Rows = styled.div<{ content?: string }>`
  width: 100%;
  display: flex;
  justify-content: ${(props) => props.content};
  flex-direction: row;
`

export const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1em;
`

export const Warn = styled.span`
  padding: 0.5em 1.5em;
  border: 1px solid #ffae00;
  border-radius: 4em;
  font-family: 'Poppins';
  font-weight: 700;
  font-style: italic;
  color: #ffae00;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
  margin-top: 1em;
`
