import { List } from 'contexts'

import { Filter, Table } from 'components/organisms'
import { AuthTemplate, ListTemplate } from 'components/templates'

const Jobs = () => {
  return (
    <AuthTemplate>
      <List.Settings.Provider>
        <ListTemplate title='Cadastro de Cargos'>
          <Filter.Jobs />
          <Table.Jobs />
        </ListTemplate>
      </List.Settings.Provider>
    </AuthTemplate>
  )
}

export default Jobs
