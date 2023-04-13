import styled from 'styled-components'
import { theme } from 'styles'

export const Row = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 2em;
`

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

export const Button = styled.button`
  display: flex;
  font-size: 14;
  border: none;
  font-family: 'Poppins';
  font-weight: 500;
  background-color: transparent;
  color: ${theme.neutrals.gray6};
  cursor: pointer;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  align-items: center;
  gap: 1em;

  :hover {
    color: ${theme.neutrals.gray8};
  }

  :disabled {
    cursor: not-allowed;
  }
`

export const Main = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
