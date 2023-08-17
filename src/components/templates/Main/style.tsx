import styled from 'styled-components'
import { theme } from 'styles'

export const Main = styled.div`
  width: 100%;
  min-width: 60rem;
  max-width: 60rem;
  height: auto;
  margin-bottom: 2rem;
  border: 1px solid ${theme.neutrals.gray3};
  border-radius: 8px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  color: ${theme.neutrals.gray6};

  h3 {
    color: ${theme.neutrals.gray9};
  }
`
