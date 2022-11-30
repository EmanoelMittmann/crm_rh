
import IconLogin1 from './IconsElements/IconLogin1'
import InputIcon from '../Input'
import { ContainerIcon, StyleLogin01, StyleLogin02, StyleLogin03, StyleLogin04 } from './style'
import IconLogin2 from './IconsElements/IconLogin2'
import IconLogin3 from './IconsElements/IconLogin3'
import IconLogin4 from './IconsElements/IconLogin4'


export const ComponentsLogin = (props: any )=> {
  return (
    <ContainerIcon>
      {props.children}
      <StyleLogin01>
        <InputIcon Icon={<IconLogin1 />} />
      </StyleLogin01>
      <StyleLogin02>
        <InputIcon Icon={<IconLogin2 />} />
      </StyleLogin02>
      <StyleLogin03>
        <InputIcon Icon={<IconLogin3 />} />
      </StyleLogin03>
      <StyleLogin04>
        <InputIcon Icon={<IconLogin4 />} />
      </StyleLogin04>
    </ContainerIcon>
  );
}
