import styled from 'styled-components'
import { theme } from 'styles'

export const Main = styled.div<{ w: string }>`
  display: flex;
  width: ${({ w }) => w};
  color: ${theme.neutrals.gray6};
  margin-bottom: 0.4rem;
  gap: 1rem;
  align-items: center;

  input {
    :checked {
      background: ${theme.brand.color.status.neutral1};
      border-color: ${theme.brand.color.status.neutral1};
    }
  }
`
