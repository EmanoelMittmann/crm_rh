import { useNavigate } from 'react-router-dom'

import { List } from 'contexts'

import { Filter, Table } from 'components/organisms'
import { AuthTemplate, ReleaseTemplate } from 'components/templates'

const OrderOfService = () => {
  const navigate = useNavigate()
  return (
    <AuthTemplate>
      <List.OrderOfService.Provider>
        <ReleaseTemplate
          btnText='Gerar O.S'
          event={() => navigate('/orderOfService/new')}
          title='Ordem de serviço'
        >
          <Filter.OrderOfService />
          <Table.OrderOfService />
        </ReleaseTemplate>
      </List.OrderOfService.Provider>
    </AuthTemplate>
  )
}

export default OrderOfService
