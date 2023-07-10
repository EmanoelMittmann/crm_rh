import React from 'react'
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
          title='Horas Extras'
          arrow={true}
          event={() => navigate('/sendingHours')}
          btnText='Novo lançamento'
        >
          <Filter.HoursProfessional />
          <Table.HoursProfessional />
        </ReleaseTemplate>
      </List.ProfessionalHours.Provider>
    </AuthTemplate>
  )
}

export default HoursProfessional
