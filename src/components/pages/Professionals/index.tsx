import { List } from 'contexts'

import { Table, Filter } from 'components/organisms'
import { AuthTemplate, ListTemplate } from 'components/templates'

const Professionals = () => {
  return (
    <AuthTemplate>
      <List.Professional.Provider>
        <ListTemplate title='Profissionais' arrow={true}>
          <Filter.Professionals />
          <Table.Professionals />
        </ListTemplate>
      </List.Professional.Provider>
    </AuthTemplate>
  )
}

export default Professionals
