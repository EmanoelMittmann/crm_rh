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
import { Order } from 'components/organisms/Tables/OrderFormTable/type'
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

    const methods = useForm<FormOrderProps['OrderOfService']>({
        defaultValues: {},
        shouldFocusError: true
    })

    const modalRef = useRef<IHandleModalPropsCommission>(null)

    const onSubmit = async (data: any) => {
        handleOpenModal(data.professional)
    }

    const handleOpenModal = async (professionals: Order[]) => {
        if (modalRef.current) {
            modalRef.current.open(professionals)
        }

        const updateProfessional = professionals.map(
            (professional: Order) => {
                return {
                    professional_id: professional.professional_id,
                    companies_id: professional.companies_id,
                    commission: professional.commission
                }
            }
        )

        methods.setValue('professionals', updateProfessional)
        console.log('updateProfessional: ', updateProfessional)

        try {
            const response = await api.post(
                routes.orderOfService.register,
                updateProfessional
            )

            if (response.data.msg === 'successfully generated report') {
                toast({
                    type: 'success',
                    title: 'Ordem de Serviço gerada com sucesso.',
                    position: 'bottom-right'
                })
                // navigate('/orderOfService')
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
//   const handleProfessionals = (professionalList: Order[]) => {
//     setModalOpen(true)
//     const updateProfessional = professionalList.map(
//       (professional: Order) => {
//         return {
//           professional_id: professional.professional_id,
//           companies_id: professional.companies_id,
//           commission: professional.commission
//         }
//       }
//       )
//       methods.setValue('professionals', updateProfessional)
//       console.log('updateProfessional: ', updateProfessional);

//      api.post(routes.orderOfService.register, updateProfessional)
//      setModalOpen(false)
// }
