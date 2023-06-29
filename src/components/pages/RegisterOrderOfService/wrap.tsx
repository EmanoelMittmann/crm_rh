import { useContext, useRef } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import { List } from 'contexts'

import { Button } from 'components/atoms'
import {
  IHandleModalPropsCommission,
  Modal
} from 'components/molecules/Modais'
import { FormOrderProps } from 'components/organisms'
import { AuthTemplate } from 'components/templates'

import OrderForm from '../OrdeForm'
import {
  ConatinerButton,
  ContainerCompany,
  ContainerFixed
} from './style'

const RegisterOrderOfServiceWrap = () => {
  const { onCreateOs } = useContext(
    List.OrderOfServiceprofessionalOS.Context
  )

  const modalRef = useRef<IHandleModalPropsCommission>(null)

  const methods = useForm<FormOrderProps['OrderOfService']>({
    defaultValues: {},
    shouldFocusError: true
  })

  const handleProfessionals = async () => {
    const isExistCommission = await onCreateOs()
    console.log(modalRef)
    if (isExistCommission) {
      modalRef.current?.open()
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
              <ConatinerButton>
                <Button.Updade
                  onClick={handleProfessionals}
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
      />
    </>
  )
}
export default RegisterOrderOfServiceWrap
