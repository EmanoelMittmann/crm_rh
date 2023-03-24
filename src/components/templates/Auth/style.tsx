import styled from 'styled-components'

const MENU_WIDTH = '17rem'

export const Container = styled.div`
  width: 100vw;
  height: auto;
  display: flex;

  .main-route {
    width: calc(100vw - ${MENU_WIDTH});
    margin-left: ${MENU_WIDTH}; // NOTE: necessário devido a sidebar estar fixa.
  }
`
