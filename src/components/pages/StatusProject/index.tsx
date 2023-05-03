
import { List } from 'contexts'

import { AuthTemplate, ListTemplate } from 'components/templates'

const StatusProject = () => {
  return (
    <AuthTemplate>
      <List.Status.Provider>
        <ListTemplate title='Cadastro de Status de Projetos'>
          <></>
        </ListTemplate>
      </List.Status.Provider>
    </AuthTemplate>
  )
}

export default StatusProject
