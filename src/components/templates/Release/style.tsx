import styled from 'styled-components'

export const Main = styled.div`
  width: 100%;
  padding: 2rem 2rem 1rem;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  min-height: calc(100vh - 6rem);
`

export const Container = styled.div<{
  gap: string
}>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap};
`

export const Footer = styled.div`
  display: flex;
  height: 100%;
`

export const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  width: fit-content;
`

export const Row = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  gap: 1em;
`
