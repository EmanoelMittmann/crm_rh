import { useContext, useEffect, useRef, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import { List } from 'contexts'

import { Button, Loading } from 'components/atoms'
import {
  IHandleModalPropsCommission,
  Modal
} from 'components/molecules/Modais'
import { FormOrderProps } from 'components/organisms'
import OnPrice from 'components/organisms/Tables/OrderFormTable/OnPrice'
import { LoadingWrapper } from 'components/organisms/Tables/style'
import { AuthTemplate } from 'components/templates'

import OrderForm from '../OrdeForm'
import {
  ConatinerButton,
  ContainerCompany,
  ContainerFixed
} from './style'

const RegisterOrderOfServiceWrap = () => {
  const { onCreateOs, navigateTo, professionalsHaveCommission } =
    useContext(List.OrderOfServiceprofessionalOS.Context)

  const modalRef = useRef<IHandleModalPropsCommission>(null)

  const methods = useForm<FormOrderProps['OrderOfService']>({
    defaultValues: {},
    shouldFocusError: true
  })

  const [isLoading, setIsLoading] = useState(false)

  const handleProfessionals = async () => {
    setIsLoading(true)
    const isExistCommission = await onCreateOs()
    if (isExistCommission) {
      modalRef.current?.open()
    }
    setIsLoading(false)
    return
  }

  useEffect(() => {
    if (professionalsHaveCommission.length === 0) {
      modalRef.current?.close()
    }
  }, [professionalsHaveCommission, isLoading])

  return (
    <>
      {isLoading && (
        <LoadingWrapper>
          <Loading />
        </LoadingWrapper>
      )}
      <AuthTemplate>
        <FormProvider {...methods}>
          <form>
            <OrderForm />
            <ContainerFixed>
              <ContainerCompany>
                <OnPrice />
              </ContainerCompany>
              <ConatinerButton>
                <Button.Updade
                  onSave={handleProfessionals}
                  onCancel={() => navigateTo('/orderOfService')}
                  type='button'
                  saveButtonName='Criar O.S'
                  cancelButtonName='cancelar'
                  disabled={isLoading}
                  isLoading={isLoading}
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
