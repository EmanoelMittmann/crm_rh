import { List } from 'contexts'

import { Table, Filter } from 'components/organisms'
import { AuthTemplate, ListTemplate } from 'components/templates'

const Projects = () => {
  return (
    <AuthTemplate>
      <List.Project.Provider>
        <ListTemplate title='Projetos' arrow={true}>
          <Filter.Projects />
          <Table.Projects />
        </ListTemplate>
      </List.Project.Provider>
    </AuthTemplate>
  )
}

export default Projects
