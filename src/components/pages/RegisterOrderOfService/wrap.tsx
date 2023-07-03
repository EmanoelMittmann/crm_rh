import { useContext, useEffect, useRef, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

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
import OnPrice from 'components/organisms/Tables/OrderFormTable/OnPrice'

const RegisterOrderOfServiceWrap = () => {
  const { onCreateOs, navigateTo, professionalsHaveCommission} =
    useContext(List.OrderOfServiceprofessionalOS.Context)

  const navigate = useNavigate()
  const [iscancel, setIsCancel] = useState(false)

  const modalRef = useRef<IHandleModalPropsCommission>(null)

  const methods = useForm<FormOrderProps['OrderOfService']>({
    defaultValues: {},
    shouldFocusError: true
  })


  const handleProfessionals = async () => {
    const isExistCommission = await onCreateOs()
    if (isExistCommission) {
      modalRef.current?.open()

    } else {
      // navigateTo('/orderOfService')
    }
  }

  useEffect(() => {
    if (professionalsHaveCommission.length === 0) {
      modalRef.current?.close();
    }
  }, [professionalsHaveCommission])
  

  function cancelSave() {
    setIsCancel(true)
    navigateTo('/orderOfService')
  }

  return (
    <>
      <AuthTemplate>
        <FormProvider {...methods}>
          <form>
            <OrderForm />
            <ContainerFixed>
              <ContainerCompany>
                <OnPrice/>
              </ContainerCompany>
              <ConatinerButton>
                <Button.Updade
                  onClick={handleProfessionals}
                  onCancel={cancelSave}
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
