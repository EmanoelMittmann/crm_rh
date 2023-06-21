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
export const RequiredLabel = styled.span`
  color: red;
`

export const Label = styled.label`
  font-size: 14px;
  line-height: 21px;
  font-weight: 700;
  color: ${({ color }) => (color ? color : 'rgb(34, 39, 45)')};
  text-align: left;
  font-family: Poppins, sans-serif;
`
