import InputIcon from "../Input";
import {
  ContainerIcon,
  ContainerOffice,
  IconHome,
  StyleBase,
  StyleBiggerWindow,
  StyleChar,
  StyleCharTwo,
  StyleEar,
  StyleFace,
  StyleFaceOne,
  StyleFootChar,
  StyleGlass,
  StyleHair,
  StyleHairB,
  StyleHairC,
  StyleHairD,
  StyleHairE,
  StyleHairF,
  StyleHairM,
  StyleHairOne,
  StyleHairR,
  StyleHairS,
  StyleHairTwo,
  StyleLoginBottom,
  StyleLoginBottomBlue,
  StyleLoginTop,
  StyleLoginTopBlue,
  StylelWindowGlass,
  StyleMat,
  StylePictuteOne,
  StylePictuteTwo,
  StyleShadow,
  StyleShadowTwo,
  StyleSmallWindow,
  StyleTable,
  StyleTableTwo,
  StyleVerticalOne,
  StyleVerticalWindow,
  StyleVerticalWindowTwo,
  StyleWindowInnerGlass,
} from "./style";
import IconLoginTop from "./IconsElements/IconLoginTop";
import IconLoginTopBlue from "./IconsElements/IconLoginTopBlue";
import IconLoginBottom from "./IconsElements/IconLoginBottom";
import IconLoginBottomBlue from "./IconsElements/IconLoginBottomBlue";
import ButtonChangeTheme from "../ButtonChangeTheme";
import { IconSmallWindow } from "./IconsElements/IconSmallWindow";
import { IconGlass } from "./IconsElements/IconGlass";
import { IconBiggerWindow } from "./IconsElements/IconBiggerWindow";
import { IconWindowGlas } from "./IconsElements/IconWindowGlass";
import { IconVerticalWindow } from "./IconsElements/IconVerticalWindow";
import { IconBlackFace } from "./IconsElements/IconBlackFace";
import { IconMat } from "./IconsElements/IconMat";
import { IconBlackHair } from "./IconsElements/IconBlackHair";
import { IconHorizontalBase } from "./IconsElements/IconHorizontalBase";
import { IconWindowInnerGlass } from "./IconsElements/IconWindowInnerGlass";
import { IconVerticalWindowTwo } from "./IconsElements/IconVerticalWindowTwo";
import { IconOneTable } from "./IconsElements/IconIOneTable";
import { IconChair } from "./IconsElements/IconChair";
import { IconFootChair } from "./IconsElements/IconFootChar";
import { IconShadowWindow} from "./IconsElements/IconShadowWindow";
import { IconShadowWindowTwo } from "./IconsElements/IconShadowWindowTwo";
import { IconPictureOneWindow } from "./IconsElements/IconPictureOneWindow";
import { IconPictureTwoWindow } from "./IconsElements/IconPictureTwoWindow";
import { IconBlackHairOne } from "./IconsElements/IconBlackHairOne";
import { IconBlackHairTwo } from "./IconsElements/IconBlackHairTwo";
import { IconBlackHairM } from "./IconsElements/IconBlackHairM";
import { IconEar } from "./IconsElements/IconEar";
import { IconBlackHairOneE } from "./IconsElements/IconBlackHairOneE";
import { IconfaceOne } from "./IconsElements/IconFaceOne";


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
        <StyleSmallWindow>
          <IconSmallWindow />
        </StyleSmallWindow>

        <StylelWindowGlass>
          <IconWindowGlas />
        </StylelWindowGlass>

        <StyleGlass>
          <IconGlass />
        </StyleGlass>

        <StyleFaceOne>
          <IconfaceOne />
        </StyleFaceOne>
        <StyleFace>
          <IconBlackFace />
        </StyleFace>

        <StyleMat>
          <IconMat />
        </StyleMat>

        <StyleHair>
          <IconBlackHair />
        </StyleHair>

        <StyleHairOne>
          <IconBlackHairOneE />
        </StyleHairOne>

        <StyleHairD>
          <IconBlackHairOne />
        </StyleHairD>

        <StyleHairE>
          <IconBlackHairOne />
        </StyleHairE>

        <StyleHairF>
          <IconBlackHair />
        </StyleHairF>

        <StyleHairTwo>
          <IconBlackHairTwo />
        </StyleHairTwo>

        <StyleHairS>
          <IconBlackHair />
        </StyleHairS>

        <StyleHairR>
          <IconBlackHair />
        </StyleHairR>

        <StyleHairM>
          <IconBlackHairM />
        </StyleHairM>

        <StyleHairB>
          <IconBlackHair />
        </StyleHairB>

        <StyleHairC>
          <IconBlackHair />
        </StyleHairC>

        <StyleEar>
          <IconEar />
        </StyleEar>

        <StyleWindowInnerGlass>
          <IconWindowInnerGlass />
        </StyleWindowInnerGlass>

        <StyleBiggerWindow>
          <IconBiggerWindow />

          <StyleShadow>
            <IconShadowWindow />
          </StyleShadow>

          <StyleShadowTwo>
            <IconShadowWindowTwo />
          </StyleShadowTwo>
        </StyleBiggerWindow>

        <StyleBase>
          <IconHorizontalBase />
        </StyleBase>

        <StyleVerticalWindow>
          <IconVerticalWindowTwo />
        </StyleVerticalWindow>

        <StyleVerticalOne>
          <IconVerticalWindow />
        </StyleVerticalOne>

        <StyleVerticalWindowTwo>
          <IconVerticalWindowTwo />
        </StyleVerticalWindowTwo>

        <StylePictuteOne>
          <IconPictureOneWindow />
        </StylePictuteOne>

        <StylePictuteTwo>
          <IconPictureTwoWindow />
        </StylePictuteTwo>

        <StyleFootChar>
          <IconFootChair />
        </StyleFootChar>

        <StyleChar>
          <IconChair />
        </StyleChar>

        <StyleCharTwo>
          <IconChair />
        </StyleCharTwo>

        <StyleTable>
          <IconOneTable />
        </StyleTable>

        <StyleTableTwo>
          <IconOneTable />
        </StyleTableTwo>
      </ContainerOffice>
    </ContainerIcon>
  );
};
