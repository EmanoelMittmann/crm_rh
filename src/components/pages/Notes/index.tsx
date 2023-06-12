import { List } from 'contexts'

import { Table } from 'components/organisms'
import { AuthTemplate, ListTemplate } from 'components/templates'

const Notes = () => {
  return (
    <AuthTemplate>
      <List.Notes.Provider>
        <ListTemplate title='Notas Fiscais' arrow={true}>
          <Table.Notes />
        </ListTemplate>
      </List.Notes.Provider>
    </AuthTemplate>
  )
}

export default Notes
