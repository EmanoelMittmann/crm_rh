
import IconLogin1 from './IconsComponenst/IconLogin1'
import InputIcon from '../Input'
import { StyleLogin01, StyleLogin02, StyleLogin03, StyleLogin04 } from './style'
import IconLogin2 from './IconsComponenst/IconLogin2'
import IconLogin3 from './IconsComponenst/IconLogin3'
import IconLogin4 from './IconsComponenst/IconLogin4'


export const ComponentsLogin = (props: any )=> {
  return (

  <>
  {props.children}
        <StyleLogin01><InputIcon Icon={<IconLogin1 />} /></StyleLogin01>
        <StyleLogin02><InputIcon Icon={<IconLogin2/>}/></StyleLogin02>
        <StyleLogin03> <InputIcon Icon={<IconLogin3/>}/></StyleLogin03>
        <StyleLogin04><InputIcon Icon={<IconLogin4/>}/></StyleLogin04>

  </>
  )
}
