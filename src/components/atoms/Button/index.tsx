import { IButtonProps } from "../../../react-app-env";
import { ContainerMain } from "./style";

const ButtonWithHover = ({
  Text,
  Icon,
  color,
  fill,
  colorActive,
  fillActive,
  bgActive,
  isActive,
  ...props
}: IButtonProps) => {
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
        <div className="container"></div>
        {Icon}
        {Text}
      </ContainerMain>
    </>
  );
};

export default ButtonWithHover;
