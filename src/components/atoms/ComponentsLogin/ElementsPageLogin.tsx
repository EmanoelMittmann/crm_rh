import {
  ContainerIcon,
  ContainerOffice,
  IconHome,
  StyleLoginBottom,
  StyleLoginBottomBlue,
  StyleLoginTop,
  StyleLoginTopBlue,
} from "./style";
import IconLoginTop from "./IconsElements/IconLoginTop";
import IconLoginTopBlue from "./IconsElements/IconLoginTopBlue";
import IconLoginBottom from "./IconsElements/IconLoginBottom";
import IconLoginBottomBlue from "./IconsElements/IconLoginBottomBlue";
import ButtonChangeTheme from "../ButtonChangeTheme";
import { ImgPageLogin } from "./IconsElements/ImgPageLogin";

export const ComponentsLogin = () => {
  return (
    <ContainerIcon>
      <IconHome>
        <StyleLoginTop>
          <IconLoginTop />
        </StyleLoginTop>
      </IconHome>

      <StyleLoginTopBlue>
        <IconLoginTopBlue />
      </StyleLoginTopBlue>

      <ButtonChangeTheme />

      <StyleLoginBottom>
        <IconLoginBottom />
      </StyleLoginBottom>

      <StyleLoginBottomBlue>
        <IconLoginBottomBlue />
      </StyleLoginBottomBlue>
      <ContainerOffice>
        <ImgPageLogin />
      </ContainerOffice>    
    </ContainerIcon>
  );
};
