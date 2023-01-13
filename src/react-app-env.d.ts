import { type } from "os";
import { MouseEvent } from "react";

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  Text: string;
  Icon: JSX.Element;
  color: string;
  fill: string;
  fillActive: string;
  colorActive: string;
  bgActive: string;
  isActive: boolean;
}

export interface IInputsProps {
  Icon: JSX.Element;
}
export interface IInputsPropsDate{
  date?: string |number | undefined; 
  Icon?: JSX.Element;
  value?: string | number;
  label?: string;
  placeholder?: string;
  margin?: string;
  disabled?: boolean | undefined;
  width?: string;
  padding?: string;
  displayDate?: string;
  placeholderColor?: string;
  placeholderPosition?: string;
  max?: string | number | undefined;
  type?: React.HTMLInputTypeAttribute | undefined;
}


export interface IButtonPropsLightUp extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  Text: string;
  Icon: JSX.Element;
}

export interface ISelectStylesProps{
  w: string,
  h: string,
}

export interface IButtonPropsTemplate
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  Text: string;
  color: string;
  fill: string;
  fillActive: string;
  colorActive: string;
  bgActive:string;
  isActive?: boolean;
}