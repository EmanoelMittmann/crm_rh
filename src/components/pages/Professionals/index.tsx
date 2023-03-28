import { AuthTemplate, ListTemplate } from 'components/templates'
import { Table, Filter } from 'components/organisms'
import { List } from 'contexts'

const Professionals = () => {
  return (
    <AuthTemplate>
      <List.Professional.Provider>
        <ListTemplate title='Profissionais'>
          <Filter.Professionals />
          <Table.Professionals />
        </ListTemplate>
      </List.Professional.Provider>
    </AuthTemplate>
  )
}

export default Professionals
