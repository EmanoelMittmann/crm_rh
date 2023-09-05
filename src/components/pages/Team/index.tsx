import { List } from 'contexts'

import { Filter, Table } from 'components/organisms'

const Projects = () => {
  return (
    <List.Team.Provider>
      <Filter.Team />
      <Table.Team />
    </List.Team.Provider>
  )
}

export default Projects
