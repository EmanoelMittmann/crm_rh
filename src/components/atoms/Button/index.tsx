import { IButtonProps } from "../../../react-app-env";
import { ContainerMain } from "./style";

const ButtonWithHover = ({ Text, Icon,color, fill,...props}: IButtonProps) => {
  return (
    <>
      <ContainerMain {...props} color={color} fill={fill} >
        {Icon}
        {Text}
      </ContainerMain>
    </>
  );
};

export default ButtonWithHover;
