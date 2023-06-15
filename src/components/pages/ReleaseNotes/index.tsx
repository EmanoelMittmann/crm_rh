import { List } from 'contexts'

import { Filter, Table } from 'components/organisms'
import { AuthTemplate, ReleaseTemplate } from 'components/templates'

const ReleaseNotes = () => {
  return (
    <AuthTemplate>
      <List.UserNotes.Provider>
        <ReleaseTemplate
          arrow={true}
          title='Notas Fiscais'
          btnText='Enviar NF'
          path='/uploadNotes'
        >
          <Filter.UserNotes />
          <Table.UserNotes />
        </ReleaseTemplate>
      </List.UserNotes.Provider>
    </AuthTemplate>
  )
}

export default ReleaseNotes
