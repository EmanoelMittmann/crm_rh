import {MouseEvent} from "react";

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    Text: string,
    Icon: JSX.Element,
    color:string
    fill: string
}
