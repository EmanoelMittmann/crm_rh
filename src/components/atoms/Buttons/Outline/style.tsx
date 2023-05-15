import styled from 'styled-components'

export const ButtonOutline = styled.button<{
  bgColor: string
  bColor: string
  color: string
}>`
  height: 56px;
  width: 272px;
  color: ${(props) => props.color};
  border: 1px solid ${(props) => props.bColor};
  background-color: ${(props) => props.bgColor};
  border-radius: 8px;
  padding: 16px;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`
