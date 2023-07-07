import styled from 'styled-components'
import { theme } from 'styles'

export const PagesNumber = styled.p<{ Active?: boolean }>`
  font-family: 'Poppins';
  font-weight: 500;
  color: #737d86;
  display: flex;
  justify-content: center;
  cursor: pointer;
  transition: all 100ms ease;
  border-radius: 50%;
  width: 1.5em;

  ${(props) =>
    props.Active &&
    `
    font-weight: 600;
    color: ${theme.brand.color.status.neutral1};
    outline: 3px solid ${theme.brand.color.status.neutral1};
  `}
`

export const Row = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 2em;
`

export const Main = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
