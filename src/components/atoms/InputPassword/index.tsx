import { Input } from '@stardust-ds/react';
import {useState} from 'react'
import { IconEye } from '../Icons/IconEye';
import { IconEyeSlash } from '../Icons/IconEyeSlash';
import InputIcon from "../Input";

//Input com icone para vizualizar senha

const InputToView = () => {
     const [show, setShow] = useState(false);
     const handleClick = () => setShow(!show);

  const canSeePasswordIcon = !show ? (
    <InputIcon Icon={<IconEyeSlash />} />
  ) : (
    <InputIcon Icon={<IconEye />} />
  );

  return (
    <Input
      isFullWidth
      label="Senha"
      type={show ? "text" : "password"}
      placeholder="senha"
      iconRight={canSeePasswordIcon}
      iconRightAction={handleClick}
      onChange={() => {}}
      onBlur={()=> {}}
    />
  );
}

export default InputToView;