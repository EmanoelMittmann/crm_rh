import styled from 'styled-components'
import { theme } from 'styles'

const Loader = styled.div`
  display: flex;
  border: 0.5rem solid #f3f3f3;
  border-radius: 50%;
  border-top: 0.5rem solid ${theme.brand.color.primary.pure};
  min-width: 3rem;
  min-height: 3rem;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;

  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex: 1;
`

export const Component = Object.assign({}, { Container, Loader })
