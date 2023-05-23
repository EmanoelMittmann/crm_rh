import { List } from 'contexts'

import { Filter, Table } from 'components/organisms'
import { AuthTemplate, ListTemplate } from 'components/templates'

const Companys = () => {
  return (
    <AuthTemplate>
      <List.Company.Provider>
        <ListTemplate title='Empresas' arrow={true}>
          <Filter.Companys />
          <Table.Companys />
        </ListTemplate>
      </List.Company.Provider>
    </AuthTemplate>
  )
}

export default Companys
