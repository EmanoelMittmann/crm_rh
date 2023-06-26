import { useEffect } from 'react'

import api from 'api'
import { routes } from 'routes'

export const OrderForm = () => {
  const getProfessional = async () => {
    const { data } = await api.get(routes.professional.list)
  }

  useEffect(() => {
    getProfessional()
  }, [])

  // const handleCheckboxChange = async (isChecked: boolean) => {
  //   if (isChecked) {
  //     const dataToSend = watch('professional') || []

  //     // const newIDataToSend = {
  //     //   professional_id: id,
  //     //   commission: thereIsCommission ? '1' : '0',
  //     //   companies_id: selectedCompany
  //     // }
  //     const newIDataToSend = {
  //       professional_id: id,
  //       commission: Number(thereIsCommission),
  //       companies_id: selectedCompany
  //     }
  //     const updatedValues = [...dataToSend, newIDataToSend]
  //     const hasCommission = updatedValues.some(
  //       (item) => item.commission === '1'
  //     )

  //     setValue('professional', updatedValues)

  //     if (hasCommission) {
  //       handleOpenModal()
  //     }
  //   } else {
  //     setValue(field, false)
  //   }
  // }

  return (
    <>
      <div>
        <h1>OrderForm</h1>
      </div>
    </>
  )
}
