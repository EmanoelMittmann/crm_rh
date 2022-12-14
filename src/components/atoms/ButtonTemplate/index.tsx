import {IButtonPropsTemplate } from "../../../react-app-env";
import { ContainerMain } from "./style";

const ButtonTemplate = ({
  Text,
  color,
  fill,
  colorActive,
  fillActive,
  bgActive,
  isActive,
  ...props
}: IButtonPropsTemplate) => {
  return (
    <>
      <ContainerMain
        {...props}
        color={color}
        fill={fill}
        colorActive={colorActive}
        fillActive={fillActive}
        bgActive={bgActive}
        isActive={isActive}
      >
        {Text}
      </ContainerMain>
    </>
  );
};

export default ButtonTemplate;
