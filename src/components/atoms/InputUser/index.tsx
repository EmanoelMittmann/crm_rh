import { Input } from '@stardust-ds/react'
import InputIcon from '../InputIcon'
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