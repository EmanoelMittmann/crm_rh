import { Filter, Table } from "components/organisms"
import { AuthTemplate, ListTemplate } from "components/templates"
import {List} from "contexts" 

const OrderOfService = () => {
    return(
        <AuthTemplate>
            <List.OrderOfService.Provider>
                <ListTemplate title='Ordem de Serviço' arrow={true}>
                    <Filter.OrderOfService/>
                    <Table.OrderOfService/>
                </ListTemplate>
            </List.OrderOfService.Provider>
        </AuthTemplate>
    )
}

export default OrderOfService