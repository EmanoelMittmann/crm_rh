import React from 'react'
import { useNavigate } from 'react-router-dom'

import { List } from 'contexts'

import { Filter, Table } from 'components/organisms'
import { AuthTemplate, ReleaseTemplate } from 'components/templates'

export const TechLead = () => {
  const navigate = useNavigate()
  return (
    <AuthTemplate>
      <List.TechLeadHours.Provider>
        <ReleaseTemplate
          btnText='Lançar Horas'
          event={() => navigate('/releaseHours')}
          arrow={true}
          title='Aprovação de Horas'
        >
          <Filter.TechLead />
          <Table.TechLead />
        </ReleaseTemplate>
      </List.TechLeadHours.Provider>
    </AuthTemplate>
  )
}
