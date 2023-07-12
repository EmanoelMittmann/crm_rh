import React from 'react'

import { List } from 'contexts'

import { Table } from 'components/organisms'
import { AuthTemplate, ReleaseTemplate } from 'components/templates'

export const TechLead = () => {
  return (
    <AuthTemplate>
      <List.TechLeadHours.Provider>
        <ReleaseTemplate
          btnText='Lançar Horas'
          arrow={true}
          title='Aprovação de Horas'
        >
          <Table.TechLead />
        </ReleaseTemplate>
      </List.TechLeadHours.Provider>
    </AuthTemplate>
  )
}
