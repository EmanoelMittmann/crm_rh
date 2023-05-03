import { List } from 'contexts'

import { Table } from 'components/organisms'
import { AuthTemplate, ListTemplate } from 'components/templates'

const StatusProject = () => {
  return (
    <AuthTemplate>
      <List.Status.Provider>
        <ListTemplate title='Cadastro de Status de Projetos'>
          <Table.StatusProject />
        </ListTemplate>
      </List.Status.Provider>
    </AuthTemplate>
  )
}

export default StatusProject
