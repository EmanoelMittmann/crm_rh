import { useRef, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { toast } from '@stardust-ds/react'

import { Button } from 'components/atoms'
import {
  IHandleModalPropsCommission,
  Modal
} from 'components/molecules/Modais'
import { FormOrderProps } from 'components/organisms'
import { AuthTemplate } from 'components/templates'

import api from 'api'
import { routes } from 'routes'

import OrderForm from '../OrdeForm'
import {
  ConatinerButton,
  ContainerCompany,
  ContainerFixed
} from './style'

const RegisterOrderOfService = () => {
  const navigate = useNavigate()
  const [commissionValues, setCommissionValues] = useState<any[]>([]);


  const methods = useForm<FormOrderProps['OrderOfService']>({
    defaultValues: {},
    shouldFocusError: true
  })
  const modalRef = useRef<IHandleModalPropsCommission>(null)

  const onSubmit = async (data: any) => {
    if (data.professional.length > 0) {
  
        const professionalsToRegister = [...data.professional];
         handleOpenModal(professionalsToRegister);
        }

     
  };

  const handleOpenModal = async (professionals: any[]) => {
    if (modalRef.current) {
      modalRef.current.open(professionals);

      const updatedCommissionValues = professionals.map((professional) => ({
        professional_id: professional.professional_id,
        companies_id: professional.companies_id,
        commission: professional.commission,
      }));
      
      console.log('updatedCommissionValues: ', updatedCommissionValues);
      setCommissionValues(updatedCommissionValues);


      try {
        const response = await api.post(
          routes.orderOfService.register,
          professionals
        );

        if (response.data.msg === 'successfully generated report') {
          toast({
            type: 'success',
            title: 'Ordem de Serviço gerada com sucesso.',
            position: 'bottom-right',
          });
          // navigate('/orderOfService')
        }
      } catch (err) {
        toast({
          type: 'error',
          title: 'Erro ao gerar ordem de serviço.',
          position: 'bottom-right',
        });
        console.log(err);
      }
    }
  };


       

  return (
    <>
      <AuthTemplate>
        <FormProvider {...methods}>
          <form>
            <OrderForm />
            <ContainerFixed>
              <ContainerCompany>Empresas</ContainerCompany>
              <ConatinerButton>
                <Button.Updade
                  onSave={methods.handleSubmit(onSubmit)}
                  type='button'
                  saveButtonName='Criar O.S'
                  cancelButtonName='cancelar'
                />
              </ConatinerButton>
            </ContainerFixed>
          </form>
        </FormProvider>
      </AuthTemplate>
      <Modal.Commission
        ref={modalRef}
        placeholder='Confirmar Profissionais'
        text='Confirmar Profissionais'
        EventOne={handleOpenModal}
      />
    </>
  )
}

export default RegisterOrderOfService
