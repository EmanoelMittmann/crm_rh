
import { toast } from "@stardust-ds/react";
import api from "api";
import { Button, Loading } from "components/atoms";
import { Filter, FormOrderProps } from "components/organisms";
import OrderOfService from "components/organisms/Forms/OrderOfService";


import { AuthTemplate, CreateTemplate, ListTemplate } from "components/templates";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { routes } from "routes";
import OrderForm from "../OrdeForm";
import { useNavigate, useParams } from "react-router-dom";
import { ConatinerButton, ContainerCompany, ContainerFixed } from "./style";



const RegisterOrderOfService = () => {
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()

    const {id} = useParams()
    console.log('id: ', id);



    const methods = useForm<FormOrderProps['OrderOfService']>({
        defaultValues: {},
        shouldFocusError: true
    })


    async function onSubmit(data: FormOrderProps['OrderOfService']) {
        const sanitizeData = {
            ...data,
            professional_id: data.professional_id,
            commission: data.commission,
            companies_id: data.companies_id,
        }

        try {
            await api.post(routes.orderOfService.createOrder(Number(id)), sanitizeData)
            toast({
                type: 'success',
                title: 'Ordem de Serviço gerada com sucesso.',
                position: 'bottom-right'
            })
            navigate('/orderOfService')
        } catch (error) {
            console.log('error: ', error)
        }
    }





return (
    <AuthTemplate>

            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                  {/* {isLoading ? (
                        <Container>
                            <Loading />
                        </Container>
                    ) : ( 
                        
                     )} */}
                    <OrderForm />
                   <ContainerFixed>
                    <ContainerCompany>

                    </ContainerCompany>
                    <ConatinerButton>
                        <Button.Updade
                            type='submit'
                            saveButtonName='Criar O.S'
                            cancelButtonName='cancelar'
                        />
                    </ConatinerButton>
                   
                   </ContainerFixed>
                      
                </form>
            </FormProvider>


    </AuthTemplate>
);
}

export default RegisterOrderOfService;