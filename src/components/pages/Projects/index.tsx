import { AuthTemplate, ListTemplate } from 'components/templates'
import { Table, Filter } from 'components/organisms'
import { List } from 'contexts'



const Projects = () => {
  return (

    <AuthTemplate>
      <List.Project.Provider>
        <ListTemplate title='Projetos'>
          <Filter.Projects />
          <Table.Projects />
        </ListTemplate>
      </List.Project.Provider>
    </AuthTemplate>
  );
};

export default Projects;


