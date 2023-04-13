import {
  Input,
  Typography,
  Checkbox,
  Button
} from '@stardust-ds/react'
import {
  BackgroundCover,
  IconUbistart,
  IconUser,
  IconArrow,
  Inputs
} from 'components/atoms'
import { colors } from 'styles'
import {
  ContainerData,
  ContainerIconUbistart,
  ContainerLogin,
  ContainerChecked,
  ContainerCheckbox,
  ContainerGlobalLogin,
  ContainerButton,
  LoginGoogle,
  SpacingLoginText
} from './style'

import type { Props } from './types'

export default ({ buttonRef }: Props) => {
  return (
    <ContainerGlobalLogin>
      <BackgroundCover />
      <ContainerLogin>
        <ContainerIconUbistart>
          <Inputs.Icon
            Icon={<IconUbistart width={230} height={48} />}
          />
        </ContainerIconUbistart>
        <ContainerData>
          <SpacingLoginText>
            <Typography type='h2' color={colors.status.neutral1}>
              Faça seu Login
            </Typography>
          </SpacingLoginText>

          <Input
            disabled
            isFullWidth
            label='E-mail'
            type='text'
            placeholder='exemplo@ubistart.com'
            iconLeft={<Inputs.Icon Icon={<IconUser />} />}
          />
          <Inputs.Password disabled />
        </ContainerData>
        <ContainerCheckbox>
          <ContainerChecked>
            <Checkbox
              activeColor='#fff'
              inactiveColor='#000'
              iconColor='#000'
            />

            <Typography type='l2'>Lembrar-me</Typography>
          </ContainerChecked>
          <Typography type='l2' color={colors.status.neutral1}>
            Esqueci a senha
          </Typography>
        </ContainerCheckbox>

        <LoginGoogle>{<div ref={buttonRef} />}</LoginGoogle>

        <ContainerButton>
          <Button
            isFullWidth
            bgColor={colors.primary.pure}
            iconRight={<IconArrow />}
            bRadius='md'
            height={50}
            // FIXME: Login limitado ao google.
            onClick={() =>
              alert(
                'Desabilitado! Tente efetuar o login usando o Google.'
              )
            }
          >
            Entrar
          </Button>
        </ContainerButton>
      </ContainerLogin>
    </ContainerGlobalLogin>
  )
}
