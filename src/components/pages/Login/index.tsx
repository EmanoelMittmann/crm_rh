import {
  Input,
  Typography,
  Checkbox,
  Button,
  useTheme,
} from '@stardust-ds/react';
import { useEffect, useRef, useState } from 'react';
import { ComponentsLogin } from '../../atoms/ComponentsLogin/ElementsPageLogin';
import { IconEye } from '../../atoms/Icons/IconEye';
import { IconEyeSlash } from '../../atoms/Icons/IconEyeSlash';
import { IconUbistart } from '../../atoms/Icons/IconUbistart';
import { IconUser } from '../../atoms/Icons/IconUser';
import InputIcon from '../../atoms/InputIcon';
import {
  Containerdatas,
  ContainerIconUbistart,
  ContainerLogin,
  ConstinerCheccked,
  ConstinerCheckebox,
  ContainerGlobalLogin,
  ContainerButton,
  LoginGoogle,
} from './style';

import IconArrow from '../../atoms/Icons/IconArrow';
import { useDispatch } from 'react-redux';
import jwt_decode from 'jwt-decode';
import api from '../../../api/api';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [show, setShow] = useState(false);
  const [isChecked, setIsChecked] = useState(true);
  const [user, setUser] = useState({});
  const buttonref = useRef<HTMLDivElement>(null);
  const [password, setPassword] = useState('');

  const handleClick = () => setShow(!show);
  const { brand } = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSign = (user: CredentialResponse) => {
    accessLogin(user);
  };

  const accessLogin = async ({ credential }: CredentialResponse) => {
    const { email, sub }: IJWTDecodeGoogle = jwt_decode(credential as string);

    try {
      const { data } = await api.post('/auth', {
        google_email: email,
        google_id: sub,
        access_token: credential,
      });
      navigate('/home');
    } catch (error: any) {
      console.log(error.message);
    }
  };

console.log()

  const handlePushCredentialInGoogle = () => {};

  useEffect(() => {
    if (
      typeof window === 'undefined' ||
      !window?.google ||
      !buttonref.current
    ) {
      return;
    }
    try {
      window.google.accounts.id.initialize({
        client_id: process.env.REACT_APP_CLIENT_ID as string,
        callback: handleSign,
      });
      window.google.accounts.id.renderButton(buttonref.current, {
        size: 'large',
        type: 'standard',
      });
    } catch (error) {
      console.log(error);
    }
    handlePushCredentialInGoogle();
  }, []);

  const canSeePasswordIcon = !show ? (
    <InputIcon Icon={<IconEyeSlash />} />
  ) : (
    <InputIcon Icon={<IconEye />} />
  );


  return (
    <>
      <ContainerGlobalLogin>
        <ComponentsLogin />
        <ContainerLogin>
          <ContainerIconUbistart>
            <InputIcon Icon={<IconUbistart />} />
          </ContainerIconUbistart>
          <Containerdatas>
            <Typography type="h1" color="#0066FF">
              Faça seu Login
            </Typography>
            <Input
              isFullWidth
              label="E-mail"
              type="text"
              placeholder="exemplo@ubistart.com"
              iconLeft={<InputIcon Icon={<IconUser />} />}
              // value={user}
              onChange={(e) => setUser(e.target.value)}
              onBlur={() => {}}
            />
            <Input
              isFullWidth
              label="Senha"
              type={show ? "text" : "password"}
              placeholder="senha"
              iconRight={canSeePasswordIcon}
              iconRightAction={handleClick}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={() => {}}
            />
          </Containerdatas>
          <ConstinerCheckebox>
            <ConstinerCheccked>
              <Checkbox
                checked={isChecked}
                activeColor="#fff"
                inactiveColor="#000"
                iconColor="#000"
                onChange={() => setIsChecked(!isChecked)}
              />

              <Typography type="l1">Lembrar-me </Typography>
            </ConstinerCheccked>
            <Typography type="l1" color="#0066FF">
              Esqueci a senha
            </Typography>
          </ConstinerCheckebox>

          <LoginGoogle>
            {<div ref={buttonref}></div>}
            </LoginGoogle>

          <ContainerButton>
            <Button
              isFullWidth
              bgColor={brand.color.primary.pure}
              iconRight={<IconArrow />}
              bRadius="md"
              height={50}
              onClick={() => {
                // dispatch(loginAction());
              }}
            >
              Entrar
            </Button>
          </ContainerButton>
        </ContainerLogin>
      </ContainerGlobalLogin>
    </>
  );
};

export default Login;
