import { useState } from 'react'

import { Button } from '@stardust-ds/react'

import { IconLua, IconLight } from 'components/atoms'

import { ContainerButtonLights } from './style'

const ButtonChangeTheme = () => {
  const [change, setChange] = useState<boolean>(false)

  return (
    <ContainerButtonLights>
      {change ? (
        <Button
          iconLeft={<IconLight />}
          typographyProps={{
            fontWeight: 'light',
            type: 'p2',
            color: '#fff'
          }}
          onClick={() => setChange(false)}
          bWidth={0.3}
          bColor='#ffff'
          bStyle='solid'
          bgColor='#22272D'
          height={35}
          bRadius='md'
        >
          Acender as Luzes
        </Button>
      ) : (
        <Button
          iconLeft={<IconLua />}
          typographyProps={{
            fontWeight: 'light',
            type: 'p2',
            color: '#000'
          }}
          onClick={() => setChange(true)}
          bgColor='#ffff'
          bWidth={1}
          bStyle='solid'
          bColor='#000'
          height={35}
          bRadius='md'
        >
          Apagar as Luzes
        </Button>
      )}
    </ContainerButtonLights>
  )
}

export default ButtonChangeTheme
