import { List } from 'contexts'

import { Filter, Table } from 'components/organisms'
import { AuthTemplate, ListTemplate } from 'components/templates'

const StatusProject = () => {
  return (
    <AuthTemplate>
      <List.Status.Provider>
        <ListTemplate title='Cadastro de Status de Projetos'>
          <Filter.StatusProject />
          <Table.StatusProject />
        </ListTemplate>
      </List.Status.Provider>
    </AuthTemplate>
  )
}

export default StatusProject
