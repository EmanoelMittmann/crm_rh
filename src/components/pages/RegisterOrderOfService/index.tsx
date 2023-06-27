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
import { Order } from 'components/organisms/Tables/OrderFormTable/type'

const RegisterOrderOfService = () => {
  const navigate = useNavigate()
  const modalRef = useRef<IHandleModalPropsCommission>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [professionalList, setProfessionalList] = useState<Order[]>([])


  const methods = useForm<FormOrderProps['OrderOfService']>({
    defaultValues: {},
    shouldFocusError: true
  })



  const onSubmit = async (data: any) => {
    const { professional } = data

    try {
      const response = await api.post(
        routes.orderOfService.register,
        professional
      )
      if (response.data.msg === 'successfully generated report') {
        toast({
          type: 'success',
          title: 'Ordem de Serviço gerada com sucesso.',
          position: 'bottom-right'
        })
        navigate('/orderOfService')

      } else {
        modalRef.current && modalRef.current.open(professional)

      }
    } catch (err) {
      toast({
        type: 'error',
        title: 'Erro ao gerar ordem de serviço.',
        position: 'bottom-right'
      })
      console.log(err)
    }
  }

  const handleProfessionals = async (professionalList: Order[]) => {
    setModalOpen(true);
    const updateProfessional = professionalList.map((professional: Order) => {
      return {
        professional_id: professional.professional_id,
        companies_id: professional.companies_id,
        commission: professional.commission
      };
    });
    methods.setValue('professionals', updateProfessional);

    setProfessionalList(updateProfessional);
    setModalOpen(false);
  };

  async function handleModal() {
    const response = await api.post(
      routes.orderOfService.register,
      professionalList
      );
      if (response.data.msg === 'successfully generated report') {
        toast({
          type: 'success',
          title: 'Ordem de Serviço gerada com sucesso.',
          position: 'bottom-right'
        });
        

      navigate('/orderOfService')
    }
  }

  return (
    <>
      <AuthTemplate>
        <FormProvider {...methods}>
          <form>
            <OrderForm />
            <ContainerFixed>
              <ContainerCompany>Empresas</ContainerCompany>
              {!modalOpen && professionalList.length > 0 ? (
                <ConatinerButton>
                  <Button.Updade
                    onSave={handleModal}
                    type='submit'
                    saveButtonName='Criar O.S'
                    cancelButtonName='cancelar'
                  />
                </ConatinerButton>

              ) : (
                <ConatinerButton>
                  <Button.Updade
                    onSave={methods.handleSubmit(onSubmit)}
                    type='button'
                    saveButtonName='Criar O.S'
                    cancelButtonName='cancelar'
                  />
                </ConatinerButton>

              )}

            </ContainerFixed>
          </form>
        </FormProvider>
      </AuthTemplate>

      <Modal.Commission
        ref={modalRef}
        placeholder='Confirmar Profissionais'
        text='Confirmar Profissionais'
        EventOne={handleProfessionals}
        isOpen={modalOpen}
      />
    </>
  )
}
export default RegisterOrderOfService;