import { List } from 'contexts'

import { Filter, Table } from 'components/organisms'
import { AuthTemplate, ListTemplate } from 'components/templates'

const ExtraHoursRh = () => {
  return (
    <AuthTemplate>
      <List.ExtraHoursRh.Provider>
        <ListTemplate
          title='Aprovação de Horas Extras - RH'
          arrow={true}
        >
          <Filter.ExtraHoursRh />
          <Table.ExtraHoursRh />
        </ListTemplate>
      </List.ExtraHoursRh.Provider>
    </AuthTemplate>
  )
}

export default ExtraHoursRh
