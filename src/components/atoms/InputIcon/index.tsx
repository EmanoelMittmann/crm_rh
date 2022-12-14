
import { IInputsProps } from '../../../react-app-env';
import { ContainerPositionIcon } from './style';

const InputIcon = ({ Icon}: IInputsProps) => {

 return (
   <ContainerPositionIcon>
     {Icon}
   </ContainerPositionIcon>
 );
}

export default InputIcon;