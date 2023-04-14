import styled from 'styled-components'

export const ContainerGlobalLogin = styled.div`
  display: flex;
`

export const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 30%;
  min-height: calc(100vh - 8rem);
  left: 8rem;
  top: 4rem;
  padding: 1.4rem 2rem;
  opacity: 0.8;
  border-radius: 2px solid rgba(255, 255, 255, 1);
  border: 2px solid #ffffff;
  box-shadow: 0px 0px 80px 0px rgba(3, 42, 102, 0.1);
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.8) 0%,
      rgba(255, 255, 255, 0.8) 100%
    ),
    linear-gradient(0deg, #ffffff, #ffffff);
  border-radius: 16px;

  @media (min-height: 920px) {
    top: 8rem;
    min-height: calc(100vh - 16rem);
  }

  @media (min-width: 1624px) {
    width: 25%;
  }

  @media (max-width: 1090px) {
    width: 45%;
  }

  @media (max-width: 768px) {
    width: 75%;
    left: 4rem;
  }
`

export const ContainerData = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 100%;
  color: #0066ff;
  gap: 1.25rem;
`

export const ContainerIconUbistart = styled.div`
  display: flex;
  padding: 1em 0 4.3em 0;
`

export const ContainerChecked = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 0.5em;
`

export const ContainerCheckbox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1em;
`

export const LoginGoogle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  text-align: left;
`

export const ContainerButton = styled.div`
  display: flex;
  margin-top: 2rem;
  flex-direction: column-reverse;
  flex: 1;
`

export const SpacingLoginText = styled.div`
  margin-bottom: 0.8rem;
`
