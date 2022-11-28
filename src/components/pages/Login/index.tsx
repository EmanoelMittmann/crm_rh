import { Typography } from '@stardust-ds/react';
import React from 'react'
import InputToView from '../../atoms/InputPassword'
import InputUser from '../../atoms/InputUser'
import { Containerdatas, ContainerLogin } from './style';

const Login = () => {
  return (
    <ContainerLogin>
      <Containerdatas>
        <Typography type="h1" color="#0066FF">
          Faça seu Login
        </Typography>
        <InputUser />
        <InputToView />
      </Containerdatas>
    </ContainerLogin>
  );
}

export default Login