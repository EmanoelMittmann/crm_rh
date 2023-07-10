import React from 'react'

import { Release } from 'components/organisms'
import { AuthTemplate, CreateTemplate } from 'components/templates'

const SendingHours = () => {
  return (
    <AuthTemplate>
      <CreateTemplate title='Lançar horas extras'>
        <Release.Hours />
      </CreateTemplate>
    </AuthTemplate>
  )
}

export default SendingHours
