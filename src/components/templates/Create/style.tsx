import styled from 'styled-components'

export const Main = styled.div`
  max-width: 100%;
  padding: 2rem 2rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  min-height: calc(100vh - 6rem);
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  width: fit-content;
`
