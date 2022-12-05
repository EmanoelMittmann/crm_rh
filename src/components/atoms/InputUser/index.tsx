import { Input } from '@stardust-ds/react'
import React from 'react'
import InputIcon from '../Input'
import { IconUser } from '../Icons/IconUser'


//input com ione do usuario


const InputUser = () => {


  return (
    <Input
      isFullWidth
      label="E-mail"
      type="text"
      placeholder="E-mail"
      iconLeft={<InputIcon Icon={<IconUser />} />}
      onChange={() => {}}
      onBlur={() => {}}
    />
  );
}

export default InputUser