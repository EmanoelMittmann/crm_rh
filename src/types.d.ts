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
  height?: string;
  bottom?: string;
  left?: string;
  top?: string;
}

interface IButtonColorProps {
  bgColor?: string;
  bgActive?: string;
  bRadius?:string;
  colorActive?: string;
  color: string;
  fill?: fill;
  left:string;
  fillActive?: string;
  height?: string;
  isActive?: boolean;
  width?: string;
}

interface ISelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  placeholder: string;
  value?: Array;
}
