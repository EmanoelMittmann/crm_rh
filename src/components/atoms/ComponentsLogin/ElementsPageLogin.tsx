import InputIcon from "../Input";
import {
  ContainerIcon,
  ContainerOffice,
  IconHome,
  StyleArm,
  StyleArmOne,
  StylebarOne,
  StylebarTwo,
  StyleBase,
  StyleBiggerWindow,
  StyleChar,
  StyleCharTwo,
  StyleEar,
  StyleEyeBrowOne,
  StyleEyeBrowTwo,
  StyleEyeOne,
  StyleEyeTwo,
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
  StyleHandOne,
  StyleHandOneA,
  StyleHandTwo,
  StyleHandTwoA,
  StyleLegOne,
  StyleLegTwo,
  StyleLinkOne,
  StyleLinkOneA,
  StyleLinkTwo,
  StyleLinkTwoA,
  StyleLoginBottom,
  StyleLoginBottomBlue,
  StyleLoginTop,
  StyleLoginTopBlue,
  StylelWindowGlass,
  StyleMat,
  StyleMouth,
  StyleNeckOne,
  StyleNootebook,
  StyleNootebookBase,
  StyleNootebookBaseCover,
  StyleNootebookBaseOne,
  StyleNootebookCover,
  StyleNootebookOne,
  StyleNootebookTwo,
  StyleNose,
  StylePartLegOne,
  StylePartLegTwo,
  StylePictuteOne,
  StylePictuteTwo,
  StylePocket,
  StyleShadow,
  StyleShadowTwo,
  StyleShirtSleeve,
  StyleShirtSleeveOne,
  StyleShoeOne,
  StyleShoeOneA,
  StyleSmallWindow,
  StyleSoraNeck,
  StyleTable,
  StyleTableTwo,
  StyleTshirtOne,
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
import { IconShadowWindow } from "./IconsElements/IconShadowWindow";
import { IconShadowWindowTwo } from "./IconsElements/IconShadowWindowTwo";
import { IconPictureOneWindow } from "./IconsElements/IconPictureOneWindow";
import { IconPictureTwoWindow } from "./IconsElements/IconPictureTwoWindow";
import { IconBlackHairOne } from "./IconsElements/IconBlackHairOne";
import { IconBlackHairTwo } from "./IconsElements/IconBlackHairTwo";
import { IconBlackHairM } from "./IconsElements/IconBlackHairM";
import { IconEar } from "./IconsElements/IconEar";
import { IconBlackHairOneE } from "./IconsElements/IconBlackHairOneE";
import { IconfaceOne } from "./IconsElements/IconFaceOne";
import { IconEye } from "./IconsElements/IconEye";
import { IconEyebrowOne } from "./IconsElements/IconEyebrowOne";
import { IconEyebrowTwo } from "./IconsElements/IconEyebrowTwo";
import { IconNose } from "./IconsElements/IconNose";
import { IconMouth } from "./IconsElements/IconMouth";
import { IconTshirtOne } from "./IconsElements/IconTshirtOne";
import { IconNeckOne } from "./IconsElements/IconNeckOne";
import { IconLegBlackOne } from "./IconsElements/IconLegBlackOne";
import { IconLegBlackTwo } from "./IconsElements/IconLegBlacktwo";
import { IconArm } from "./IconsElements/IconArm";
import { IconArmOne } from "./IconsElements/IconArmOne";
import { IconShirtSleeve } from "./IconsElements/IconShirtSleeve";
import { IconShirtSleeveOne } from "./IconsElements/IconShirtSleeveOne";
import { IconPocket } from "./IconsElements/IconPocket";
import { IconSoraNeck } from "./IconsElements/IconSoraNeck";
import { IconHandPartOne } from "./IconsElements/IconHandPartOne";
import { IconHandPartOneA } from "./IconsElements/IconHandPartOneA";
import { IconHandPartTwo } from "./IconsElements/IconHandPartTwo";
import { IconHandPartTwoA } from "./IconsElements/IconHandPartTwoA";
import { IconPartLegOne } from "./IconsElements/iconPartLegOne";
import { IconPartLegTwo } from "./IconsElements/iconPartLegTwo";
import { IconBarOne } from "./IconsElements/IconBarOne";
import { IconBarTwo } from "./IconsElements/IconBarTwo";
import { IconShoeOne } from "./IconsElements/iconShoeOne";
import { IconShoeOneA } from "./IconsElements/iconShoeOneA";
import { IconLinkShoeOne } from "./IconsElements/iconLinkShoeOne";
import { IconLinkShoeTwo } from "./IconsElements/iconLinkShoeTwo";
import { IconNotebook } from "./IconsElements/IconNotebook";
import { IconNotebookBase } from "./IconsElements/IconNotebookBase";
import { IconNotebookBaseOne } from "./IconsElements/IconNotebokkBaseOne";
import { IconNotebookOne } from "./IconsElements/IconNotebookOne";
import { IconNotebookTwo } from "./IconsElements/IconNotebookTwo";
import { IconFontCover } from "./IconsElements/IconFontCover";
import { IconNotebookFontCover } from "./IconsElements/IconNotebokkBaseFontCover";

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

        <StyleEyeOne>
          <IconEye />
        </StyleEyeOne>

        <StyleEyeTwo>
          <IconEye />
        </StyleEyeTwo>

        <StyleEyeBrowOne>
          <IconEyebrowOne />
        </StyleEyeBrowOne>

        <StyleEyeBrowTwo>
          <IconEyebrowTwo />
        </StyleEyeBrowTwo>

        <StyleNose>
          <IconNose />
        </StyleNose>

        <StyleMouth>
          <IconMouth />
        </StyleMouth>
        <StyleTshirtOne>
          <IconTshirtOne />
        </StyleTshirtOne>

        <StyleNeckOne>
          <IconNeckOne />
        </StyleNeckOne>

        <StyleSoraNeck>
          <IconSoraNeck />
        </StyleSoraNeck>

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

        <StylePartLegOne>
          <IconPartLegOne />
        </StylePartLegOne>

        <StylePartLegTwo>
          <IconPartLegTwo />
        </StylePartLegTwo>

        <StyleLegOne>
          <IconLegBlackOne />
        </StyleLegOne>

        <StyleLegTwo>
          <IconLegBlackTwo />
        </StyleLegTwo>

        <StylebarOne>
          <IconBarOne />
        </StylebarOne>

        <StylebarTwo>
          <IconBarTwo />
        </StylebarTwo>

        <StyleShoeOne>
          <IconShoeOne />
        </StyleShoeOne>

        <StyleShoeOneA>
          <IconShoeOneA />
        </StyleShoeOneA>

        <StyleLinkOne>
          <IconLinkShoeOne />
        </StyleLinkOne>

        <StyleLinkTwo>
          <IconLinkShoeTwo />
        </StyleLinkTwo>

        <StyleLinkOneA>
          <IconLinkShoeOne />
        </StyleLinkOneA>

        <StyleLinkTwoA>
          <IconLinkShoeTwo />
        </StyleLinkTwoA>

        <StyleChar>
          <IconChair />
        </StyleChar>

        <StyleCharTwo>
          <IconChair />
        </StyleCharTwo>

        <StylePocket>
          <IconPocket />
        </StylePocket>

        <StyleArm>
          <IconArm />
        </StyleArm>

        <StyleArmOne>
          <IconArmOne />
        </StyleArmOne>

        <StyleShirtSleeve>
          <IconShirtSleeve />
        </StyleShirtSleeve>

        <StyleShirtSleeveOne>
          <IconShirtSleeveOne />
        </StyleShirtSleeveOne>

        <StyleTable>
          <IconOneTable />
        </StyleTable>

        <StyleTableTwo>
          <IconOneTable />
        </StyleTableTwo>

        <StyleHandOne>
          <IconHandPartOne />
        </StyleHandOne>

        <StyleHandOneA>
          <IconHandPartOneA />
        </StyleHandOneA>

        <StyleHandTwo>
          <IconHandPartTwo />
        </StyleHandTwo>

        <StyleHandTwoA>
          <IconHandPartTwoA />
        </StyleHandTwoA>

        <StyleNootebookBaseCover>
          <IconNotebookFontCover />
        </StyleNootebookBaseCover>

        <StyleNootebookCover>
          <IconFontCover />
        </StyleNootebookCover>

        <StyleNootebook>
          <IconNotebook />
        </StyleNootebook>

        <StyleNootebookBase>
          <IconNotebookBase />
        </StyleNootebookBase>

        <StyleNootebookBaseOne>
          <IconNotebookBaseOne />
        </StyleNootebookBaseOne>
        
        <StyleNootebookOne>
          <IconNotebookOne />
        </StyleNootebookOne>

        <StyleNootebookTwo>
          <IconNotebookTwo />
        </StyleNootebookTwo>

      </ContainerOffice>
    </ContainerIcon>
  );
};
