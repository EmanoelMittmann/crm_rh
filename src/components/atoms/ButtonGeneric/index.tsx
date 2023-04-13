import React from 'react'
import { ContainerButton } from './style'

interface IButtonGenericProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  Text?: string
  color?: string
  bgColor?: string
  width?: string
  height?: string
  bRadius?: string
  top?: string
  left?: string
}

export const ButtonGeneric = ({
  Text,
  bRadius,
  height,
  width,
  bgColor,
  color,
  left,
  top,
  ...props
}: IButtonGenericProps) => {
  return (
    <>
      <ContainerButton
        color={color}
        bgColor={bgColor}
        top={top}
        width={width}
        height={height}
        bRadius={bRadius}
        left={left}
        {...props}
      >
        {Text}
      </ContainerButton>
    </>
  )
}
