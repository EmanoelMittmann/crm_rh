import {
  Input,
  Typography,
  Checkbox,
  Button,
  useTheme,
} from "@stardust-ds/react";
import React, { useState } from "react";
import { ComponentsLogin } from "../../atoms/ComponentsLogin/componentsLogin";
import { IconEye } from "../../atoms/Icons/IconEye";
import { IconEyeSlash } from "../../atoms/Icons/IconEyeSlash";
import IconLogin1 from "../../atoms/ComponentsLogin/IconsComponenst/IconLogin1";
import { IconUbistart } from "../../atoms/Icons/IconUbistart";
import { IconUser } from "../../atoms/Icons/IconUserr";
import InputIcon from "../../atoms/Input";
import {
  Containerdatas,
  ContainerIconUbistart,
  ContainerLogin,
  ConstinerCheccked,
  ConstinerCheckebox,
  ContainerGlobalLogin,
  ContainerButton,
  LoginGoogle,
} from "./style";
import IconSeta from "../../atoms/Icons/IconSeta";

const Login = () => {
  const [show, setShow] = useState(false);
  const [isChecked, setIsChecked] = useState(true);
  const handleClick = () => setShow(!show);
  const { brand } = useTheme();

  const canSeePasswordIcon = !show ? (
    <InputIcon Icon={<IconEyeSlash />} />
  ) : (
    <InputIcon Icon={<IconEye />} />
  );

  return (
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
            onChange={() => {}}
            onBlur={() => {}}
          />
          <Input
            isFullWidth
            label="Senha"
            type={show ? "text" : "password"}
            placeholder="senha"
            iconRight={canSeePasswordIcon}
            iconRightAction={handleClick}
            onChange={() => {}}
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
          <Typography type="l1">Login Google</Typography>
        </LoginGoogle>
        <ContainerButton>
          <Button
            isFullWidth
            bgColor={brand.color.primary.pure}
            iconRight={<IconSeta />}
            bRadius="md"
            height={50}
          >
            Entrar
          </Button>
        </ContainerButton>
      </ContainerLogin>
    </ContainerGlobalLogin>
  );
};

export default Login;
