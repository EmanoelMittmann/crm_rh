import { Button } from "@stardust-ds/react";
import { useState } from "react";
import { IconLua } from "../ComponentsLogin/IconsElements/IconLua";
import { IconLight } from "../Icons/IconLight";
import { ContainerButtonLights } from "./style";


const ButtonChangeTheme = () => {

const [change, setChange] = useState<boolean>(false);


  return (
    <ContainerButtonLights>
      {!change ? (
        <Button
          typographyProps={{ fontWeight: "light", type: "p2", color: "#fff" }}
          iconLeft={<IconLight color="#000" />}
          onClick={() => setChange(true)}
          bWidth={0.3}
          bColor="#ffff"
          bStyle="solid"
          bgColor="#22272D"
          height={35}
          bRadius="md"
        >
          Acender as Luzes
        </Button>
      ) : (
        <Button
          iconLeft={<IconLua />}
          typographyProps={{ fontWeight: "light", type: "p2", color: "#000" }}
          onClick={() => setChange(false)}
          bgColor="#ffff"
          bWidth={0.3}
          bColor="#000"
          height={35}
          bRadius="md"
        >
          Apagar as Luzes
        </Button>
      )}
    </ContainerButtonLights>
  );
};

export default ButtonChangeTheme;
