declare module "*.svg" {
  import { ReactElement, SVGProps } from "react";
  const content: (props: SVGProps<SVGElement>) => ReactElement;
  export default content;
}

interface IContainerRowProps {
  paddingRight?: string;
  paddingLeft?: string;
  gap?: string;
}

interface IContainerColumnProps {
  bottom?: string;
  height?: string;
  left?: string;
  right?:string;
  top?: string;
  gap?: string;
  justify?: string;
  width?: string;
}

interface IButtonColorProps {
  bgColor?: string;
  bgActive?: string;
  bRadius?: string;
  colorActive?: string;
  color: string;
  fill?: fill;
  left?: string;
  fillActive?: string;
  height?: string;
  isActive?: boolean;
  width?: string;
}

interface ISelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  placeholder: string;
  value?: Array;
}

interface IButtonColorProps{
  color: string,
  fill: fill,
  colorActive:string,
  fillActive:string,
  bgActive:string,
  isActive?:boolean
}
interface IModalProps {
  optionOne: string;
  optionTwo?: string;
  eventOne: MouseEventHandler;
  eventTwo?: MouseEventHandler;
}