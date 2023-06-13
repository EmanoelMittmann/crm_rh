import { AuthTemplate, ListTemplate } from "components/templates"
import {List} from "contexts" 

const OrderOfService = () => {
    return(
        <AuthTemplate>
            <List.OrderOfService.Provider>
                <ListTemplate title='Ordem de Serviço' arrow={true}>

                </ListTemplate>
            </List.OrderOfService.Provider>
        </AuthTemplate>
    )
}

export default OrderOfService