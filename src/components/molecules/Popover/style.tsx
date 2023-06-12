import styled from 'styled-components'
import { theme } from 'styles'

export const Overlay = styled.div`
  display: flex;
  flex-direction: row-reverse;

  .children {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3em;
    width: 3em;
    cursor: pointer;
  }
`

export const ContainerModal = styled.div`
  box-shadow: 0px 10px 20px 0px ${theme.brand.color.black.transparent};
  background-color: ${theme.neutrals.pureWhite};
  width: 7rem;
  margin-top: 1rem;
  border-radius: 8px;
  transform: translate(-0.5rem, -1.5rem);
  position: absolute;

  .options {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-self: stretch;
    padding: 0.5rem;
    gap: 5px;
  }
`

export const Options = styled.p`
  cursor: pointer;
  color: ${theme.neutrals.gray6};
  font-weight: 500;

  :hover {
    color: ${theme.neutrals.gray8};
  }
`
