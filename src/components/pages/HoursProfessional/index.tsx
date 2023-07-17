import { useNavigate } from 'react-router-dom'

import { List } from 'contexts'

import { Filter, Table } from 'components/organisms'
import { AuthTemplate, ReleaseTemplate } from 'components/templates'

const HoursProfessional = () => {
  const navigate = useNavigate()
  return (
    <AuthTemplate>
      <List.ProfessionalHours.Provider>
        <ReleaseTemplate
          btnText='Novo Lançamento'
          event={() => navigate('/sendingHours')}
          title='Horas Extras'
        >
          <Filter.HoursProfessional />
          <Table.HoursProfessional />
        </ReleaseTemplate>
      </List.ProfessionalHours.Provider>
    </AuthTemplate>
  )
}

export default HoursProfessional
