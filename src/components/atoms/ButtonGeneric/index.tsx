import React from "react";
import { ContainerButton } from "./style";

interface IButtonGenericProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  Text: string;
  color: string;
  bgColor: string;
  width: string;
  height: string;
  bRadius: string;
  left: string;
}

export const ButtonGeneric = ({
  Text,
  bRadius,
  height,
  width,
  bgColor,
  color,
  left,
}: IButtonGenericProps) => {
  return (
    <>
      <ContainerButton
        color={color}
        bgColor={bgColor}
        width={width}
        height={height}
        bRadius={bRadius}
        left={left}
      >
        {Text}
      </ContainerButton>
    </>
  );
};
