import React from 'react'

import { List } from 'contexts'

import { Table } from 'components/organisms'
import { AuthTemplate, ListTemplate } from 'components/templates'

const Reports = () => {
  return (
    <AuthTemplate>
      <List.Reports.Provider>
        <ListTemplate title='Relatorios' arrow={true}>
          <Table.Reports />
        </ListTemplate>
      </List.Reports.Provider>
    </AuthTemplate>
  )
}

export default Reports
