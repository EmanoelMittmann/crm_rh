import { List } from 'contexts'

import { Filter, Table } from 'components/organisms'
import { AuthTemplate, ListTemplate } from 'components/templates'

const Notes = () => {
  return (
    <AuthTemplate>
      <List.Notes.Provider>
        <ListTemplate title='Notas Fiscais' arrow={true}>
          <Filter.Notes />
          <Table.Notes />
        </ListTemplate>
      </List.Notes.Provider>
    </AuthTemplate>
  )
}

export default Notes
