declare module "*.svg" {
    import { ReactElement, SVGProps } from "react";
    const content: (props: SVGProps<SVGElement>) => ReactElement;
    export default content;
  }

interface IContainerRowProps{
  paddingRight?: string
  paddingLeft?:string
}

interface IContainerColumnProps{
  height?: string
  bottom?: string
  left?:string
  top?:string
}

interface IButtonColorProps{
  color: string,
  fill: fill,
  colorActive:string,
  fillActive:string,
  bgActive:string,
  isActive?:boolean
}