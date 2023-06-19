import { Filter, Table } from "components/organisms"
import { ListOrderTemplate } from "components/templates"

import {List} from "contexts" 

const OrderForm = () => {
    return(
        <List.OrderOfServiceprofessionalOS.Provider>
            <ListOrderTemplate title="criar nova O.S">
                <Filter.OrderFormFilter />
                <Table.OrderFormTable />
            </ListOrderTemplate>
        </List.OrderOfServiceprofessionalOS.Provider>
    )
}

export default OrderForm