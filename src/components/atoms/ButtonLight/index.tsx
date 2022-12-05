import { IButtonProps } from "../../../react-app-env";
import { ContainerMain } from "./style";

const ButtonLight = ({Text,Icon}: IButtonProps) => {
  return (
    <>
      <ContainerMain>
        {Icon}
        {Text}
      </ContainerMain>
    </>
  );
};

export default ButtonLight;
