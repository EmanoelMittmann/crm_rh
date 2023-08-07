import { List } from 'contexts'

import { Filter, Table } from 'components/organisms'
import { AuthTemplate, ListTemplate } from 'components/templates'

const Contract = () => {
  return (
    <AuthTemplate>
      <List.Contract.Provider>
        <ListTemplate title='Histórico de Contrato' arrow={true}>
          <Filter.Contract />
          <Table.Contracts />
        </ListTemplate>
      </List.Contract.Provider>
    </AuthTemplate>
  )
}

export default Contract
