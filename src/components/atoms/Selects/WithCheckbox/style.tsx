import styled from 'styled-components'
import { theme } from 'styles'

export const Main = styled.div`
  display: grid;
  grid-gap: 1.25rem;
  padding-bottom: 0.875rem;

  .wrapper {
    padding-left: 0.5rem;
    display: flex;
    align-items: center;
    gap: 3rem;
  }

  input {
    border-color: ${theme.neutrals.gray6} !important;

    :checked {
      border-color: ${theme.brand.color.status.neutral1} !important;
    }
  }
`

export const Container = styled.div<{ active: boolean }>`
  gap: 0.875rem;
  display: flex;

  label {
    color: ${({ active }) => (active ? theme.brand.color.status.neutral1 : theme.neutrals.gray6)} !important;
  }
`
