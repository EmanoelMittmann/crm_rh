import { List } from 'contexts'

import { Filter, Table } from 'components/organisms'
import { AuthTemplate, ReleaseTemplate } from 'components/templates'

const HoursProfessional = () => {
  return (
    <AuthTemplate>
      <List.ProfessionalHours.Provider>
        <ReleaseTemplate btnText='' title='Horas Extras'>
          <Filter.HoursProfessional />
          <Table.HoursProfessional />
        </ReleaseTemplate>
      </List.ProfessionalHours.Provider>
    </AuthTemplate>
  )
}

export default HoursProfessional
