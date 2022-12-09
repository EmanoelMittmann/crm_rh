import {
  ContainerIconGlobal,
  ContainerOffice,
  ContainerIconTop,
  StyleLoginBottom,
  StyleLoginBottomBlue,
  StyleLoginTop,
  StyleLoginTopBlue,
  Container,
} from "./style";
import IconLoginTop from "./IconsElements/IconLoginTop";
import IconLoginTopBlue from "./IconsElements/IconLoginTopBlue";
import IconLoginBottom from "./IconsElements/IconLoginBottom";
import IconLoginBottomBlue from "./IconsElements/IconLoginBottomBlue";
import ButtonChangeTheme from "../ButtonChangeTheme";
import { ImgPageLogin } from "./IconsElements/ImgPageLogin";

export const ComponentsLogin = () => {
  return (
    <ContainerIconGlobal>
      <ContainerIconTop>
        <StyleLoginTop>
          <IconLoginTop />
        </StyleLoginTop>
      </ContainerIconTop>

      <StyleLoginTopBlue>
        <IconLoginTopBlue />
      </StyleLoginTopBlue>

      {/* Botão de Login */}
      <ButtonChangeTheme />

      <Container>
        <StyleLoginBottom>
          <IconLoginBottom />
        </StyleLoginBottom>

        <StyleLoginBottomBlue>
          <IconLoginBottomBlue />
        </StyleLoginBottomBlue>

        <ContainerOffice>
          <ImgPageLogin />
        </ContainerOffice>
      </Container>
    </ContainerIconGlobal>
  );
};
