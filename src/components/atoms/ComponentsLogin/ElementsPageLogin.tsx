import InputIcon from "../Input";
import {
  ContainerIcon,
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


export const ComponentsLogin = () => {

  return (
    <ContainerIcon>
      <IconHome>
        <StyleLoginTop>
          <InputIcon Icon={<IconLoginTop />} />
        </StyleLoginTop>
      </IconHome>
      <StyleLoginTopBlue>
        <InputIcon Icon={<IconLoginTopBlue />} />
      </StyleLoginTopBlue>
      <ButtonChangeTheme/>
      <StyleLoginBottom>
        <InputIcon Icon={<IconLoginBottom />} />
      </StyleLoginBottom>
      <StyleLoginBottomBlue>
        <InputIcon Icon={<IconLoginBottomBlue />} />
      </StyleLoginBottomBlue>
      
    </ContainerIcon>
  );
};
