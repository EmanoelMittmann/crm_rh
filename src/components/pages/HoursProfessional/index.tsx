import React from 'react'

import { List } from 'contexts'

import { Table } from 'components/organisms'
import {
  AuthTemplate,
  CreateTemplate,
  ListTemplate
} from 'components/templates'

const HoursProfessional = () => {
  return (
    <AuthTemplate>
      <List.ProfessionalHours.Provider>
        <ListTemplate title='Lançamento de horas' arrow={true}>
          <Table.HoursProfessional />
        </ListTemplate>
      </List.ProfessionalHours.Provider>
    </AuthTemplate>
  )
}

export default HoursProfessional
