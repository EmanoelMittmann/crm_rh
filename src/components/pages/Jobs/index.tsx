import { List } from 'contexts'

import { Table } from 'components/organisms'
import { AuthTemplate, ListTemplate } from 'components/templates'

const Jobs = () => {
  return (
    <AuthTemplate>
      <List.Settings.Provider>
        <ListTemplate title='Cadastro de Cargos'>
          <Table.Jobs />
        </ListTemplate>
      </List.Settings.Provider>
    </AuthTemplate>
  )
}

export default Jobs
