import React from 'react'

import { Release as Releases } from 'contexts'

import { Release } from 'components/organisms'
import { AuthTemplate, CreateTemplate } from 'components/templates'

const SendingHours = () => {
  return (
    <AuthTemplate>
      <Releases.ExtraHour.Provider>
        <CreateTemplate title='Lançar horas extras'>
          <Release.Hours />
        </CreateTemplate>
      </Releases.ExtraHour.Provider>
    </AuthTemplate>
  )
}

export default SendingHours
