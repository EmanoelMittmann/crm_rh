
import InputIcon from '../Input'
import { ContainerButtonLights, ContainerIcon, IconHome, StyleLoginBottom, StyleLoginBottomBlue, StyleLoginTop, StyleLoginTopBlue } from './style'
import {IconLua} from './IconsElements/IconLua'
import IconLoginTop from './IconsElements/IconLoginTop'
import IconLoginTopBlue from './IconsElements/IconLoginTopBlue'
import IconLoginBottom from './IconsElements/IconLoginBottom'
import IconLoginBottomBlue from './IconsElements/IconLoginBottomBlue'
import ButtonLight from '../ButtonLight'



export const ComponentsLogin = (props: any )=> {
  return (
    <ContainerIcon>
      {props.children}
      <ContainerButtonLights>
        <ButtonLight Text="Apagar as Luzes" Icon={<IconLua />} color={''} fill={''} />
      </ContainerButtonLights>
      <IconHome>
        <StyleLoginTop>
          <InputIcon Icon={<IconLoginTop />} />
        </StyleLoginTop>
      </IconHome>
      <StyleLoginTopBlue>
        <InputIcon Icon={<IconLoginTopBlue />} />
      </StyleLoginTopBlue>
      <StyleLoginBottom>
        <InputIcon Icon={<IconLoginBottom />} />
      </StyleLoginBottom>
      <StyleLoginBottomBlue>
        <InputIcon Icon={<IconLoginBottomBlue />} />
      </StyleLoginBottomBlue>
    </ContainerIcon>
  );
}
