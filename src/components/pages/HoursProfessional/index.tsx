import React from 'react'

import { List } from 'contexts'

import { Filter, Table } from 'components/organisms'
import { AuthTemplate, ReleaseTemplate } from 'components/templates'

const HoursProfessional = () => {
  return (
    <AuthTemplate>
      <List.ProfessionalHours.Provider>
        <ReleaseTemplate
          title='Horas Extras'
          arrow={true}
          btnText='Novo lançamento'
        >
          <Filter.HoursProfessional />
          <Table.HoursProfessional />
        </ReleaseTemplate>
      </List.ProfessionalHours.Provider>
    </AuthTemplate>
  )
}

export default HoursProfessional
