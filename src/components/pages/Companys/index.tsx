import { List } from 'contexts'

import { Table } from 'components/organisms'
import { AuthTemplate, ListTemplate } from 'components/templates'

const Companys = () => {
  return (
    <AuthTemplate>
      <List.Company.Provider>
        <ListTemplate title='Listagem de Empresas'>
          <Table.Companys />
        </ListTemplate>
      </List.Company.Provider>
    </AuthTemplate>
  )
}

export default Companys
