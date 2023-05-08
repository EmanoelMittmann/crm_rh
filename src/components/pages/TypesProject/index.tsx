import React from 'react'

import { List } from 'contexts'

import { Table } from 'components/organisms'
import { AuthTemplate, ListTemplate } from 'components/templates'

const TypesProject = () => {
  return (
    <AuthTemplate>
      <List.Types.Provider>
        <ListTemplate title='Cadastro de Tipos de Projetos'>
          <Table.TypesProject />
        </ListTemplate>
      </List.Types.Provider>
    </AuthTemplate>
  )
}

export default TypesProject
