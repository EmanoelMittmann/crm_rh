import styled from 'styled-components'
import { theme } from 'styles'

export const Main = styled.div<{ w: string }>`
  display: grid;
  width: ${({ w }) => w};
  color: ${theme.neutrals.gray6};
  gap: 0.25rem;

  // FIXME: label dos formulários possui essa cor, porém alteração impacta também o helper de erro
  /* label {
    color: ${theme.neutrals.gray6} !important;
  } */
`
