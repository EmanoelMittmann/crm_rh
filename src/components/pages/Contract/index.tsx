import React from 'react'

import { List } from 'contexts'

import { AuthTemplate, ListTemplate } from 'components/templates'

const Contract = () => {
  return (
    <AuthTemplate>
      <List.Contract.Provider>
        <ListTemplate title='Historico de Contrato'>
          <></>
        </ListTemplate>
      </List.Contract.Provider>
    </AuthTemplate>
  )
}

export default Contract
