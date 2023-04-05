import styled from 'styled-components'

const MENU_WIDTH = '17rem'

export const Container = styled.div`
  max-width: 100vw;
  display: flex;

  .template {
    width: calc(100vw - ${MENU_WIDTH});
    margin-left: ${MENU_WIDTH}; // NOTE: necessário devido a sidebar estar fixa.
  }
`
