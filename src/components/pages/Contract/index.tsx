import { List } from 'contexts'

import { Table } from 'components/organisms'
import { AuthTemplate, ListTemplate } from 'components/templates'

const Contract = () => {
  return (
    <AuthTemplate>
      <List.Contract.Provider>
        <ListTemplate title='Historico de Contrato'>
          <Table.Contracts />
        </ListTemplate>
      </List.Contract.Provider>
    </AuthTemplate>
  )
}

export default Contract
