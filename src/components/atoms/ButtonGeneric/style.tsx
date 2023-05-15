import styled from 'styled-components'

import { IButtonColorProps } from 'types'

export const ContainerButton = styled.button<IButtonColorProps>`
  background-color: ${(props) => props.bgColor};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  text-align: center;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  color: ${(props) => props.color};
  margin-top: ${(props) => props.top};
  border-radius: ${(props) => props.bRadius};
  border: none;
  margin-left: ${(props) => props.left};
  cursor: pointer;
`
