
import { IInputsProps } from '../../../react-app-env';
import { ContainerPositionIcon } from './style';

const InputIconPosition = ({ Icon}: IInputsProps) => {

 return (
   <ContainerPositionIcon>
     {Icon}
   </ContainerPositionIcon>
 );
}

export default InputIconPosition;