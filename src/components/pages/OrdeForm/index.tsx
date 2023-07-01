import { Filter, Table } from 'components/organisms'
import { ListOrderTemplate} from 'components/templates'

const OrderForm = () => {
  return (

    <ListOrderTemplate title='criar nova O.S'>
      <Filter.OrderFormFilter />
      <Table.OrderFormTable />
    </ListOrderTemplate>
   
  )
}

export default OrderForm
