import { Input, Typography, Checkbox, Button, useTheme } from '@stardust-ds/react'
import { BackgroundCover, IconUbistart, IconUser, IconArrow, Inputs } from 'components/atoms'
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
} from './style'

import type { Props } from './types'

export default ({ buttonRef }: Props) => {
  const { brand } = useTheme()

  return (
    <ContainerGlobalLogin>
      <BackgroundCover />
      <ContainerLogin>
        <ContainerIconUbistart>
          <Inputs.Icon Icon={<IconUbistart />} />
        </ContainerIconUbistart>
        <ContainerData>
          <Typography type='h1' color={colors.status.neutral1}>
            Faça seu Login
          </Typography>
          <Input
            isFullWidth
            label='E-mail'
            type='text'
            placeholder='exemplo@ubistart.com'
            iconLeft={<Inputs.Icon Icon={<IconUser />} />}
          />
          <Inputs.Password />
        </ContainerData>
        <ContainerCheckbox>
          <ContainerChecked>
            <Checkbox activeColor='#fff' inactiveColor='#000' iconColor='#000' />

            <Typography type='l1'>Lembrar-me</Typography>
          </ContainerChecked>
          <Typography type='l1' color={colors.status.neutral1}>
            Esqueci a senha
          </Typography>
        </ContainerCheckbox>

        <LoginGoogle>{<div ref={buttonRef} />}</LoginGoogle>

        <ContainerButton>
          <Button
            isFullWidth
            bgColor={brand.color.primary.pure}
            iconRight={<IconArrow />}
            bRadius='md'
            height={50}
            // FIXME: Login limitado ao google.
            onClick={() => alert('Desabilitado! Tente efetuar o login usando o Google.')}
          >
            Entrar
          </Button>
        </ContainerButton>
      </ContainerLogin>
    </ContainerGlobalLogin>
  )
}
