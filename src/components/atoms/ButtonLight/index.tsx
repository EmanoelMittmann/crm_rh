import { IButtonPropsLightUp } from "../../../react-app-env";
import { ContainerMain } from "./style";

const ButtonLight = ({ Text, Icon }: IButtonPropsLightUp) => {
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
