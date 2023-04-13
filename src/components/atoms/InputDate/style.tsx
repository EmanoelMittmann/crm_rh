import styled from 'styled-components'
import { IInputsPropsDate } from '../../../react-app-env'

export const Img = styled.img`
  width: 20px;
  margin: 0 auto;
`

export const PlaceHolder = styled.span`
  display: flex;
  align-items: center;
  width: 100%;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 1em;
  color: #acb4ba;
  opacity: 0.7;
  padding-left: 0.5em;
`

export const InputLine = styled.div<IButtonColorProps>`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: ${(props) => props.width};
  height: 45px;
  border: ${(props) =>
    `1.8px solid ${
      props.onError ? '#ff4842' : 'rgba(172, 180, 186, 1)'
    }`};
  border-radius: 3px;
  margin: ${(props) => props.margin};
`

export const StylePlaceholder = styled.span`
  display: flex;
  align-items: center;
  width: 100%;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 1em;
  color: #acb4ba;
  opacity: 0.7;
  padding-left: 0.5em;
`

export const InputDefault = styled.input<IInputsPropsDate>`
  font-size: 1rem;
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
  width: ${(props) => (props.width ? props.width : '100%')};
  height: 40px;
  padding: ${(props) => props.padding};
  outline: none;
  border: none;
  color: black;
  border-radius: 8px;

  &::placeholder {
    color: ${(props) =>
      props.placeholderColor ? props.placeholderColor : '#ACB4BA'};
    opacity: 0.7;
    text-align: ${(props) =>
      props.placeholderPosition ? props.placeholderPosition : 'left'};
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
  }

  &::-webkit-datetime-edit-text,
  &::-webkit-datetime-edit-month-field,
  &::-webkit-datetime-edit-day-field,
  &::-webkit-datetime-edit-year-field {
    color: #acb4ba;
  }

  &::-webkit-datetime-edit,
  &::-webkit-inner-spin-button,
  &::-webkit-clear-button {
    display: ${(props) => props.displayDate};
    position: absolute;
    left: 50px;
    top: 9px;
  }

  ::-webkit-calendar-picker-indicator {
    margin-left: -1em;
  }

  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    display: none;
  }
`
