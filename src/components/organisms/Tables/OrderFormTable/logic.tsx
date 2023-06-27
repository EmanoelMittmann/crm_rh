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

// const handleCheckboxChange = async (isChecked: boolean) => {
//   if (isChecked) {
//     const dataToSend = watch('professional') || []

//     let newItem: {
//       professional_id: number
//       companies_id: number
//       commission?: number
//     } = {
//       professional_id: id,
//       companies_id: selectedCompany
//     }

//     if (commission) {
//       newItem = {
//         professional_id: id,
//         companies_id: selectedCompany
//       }
//     } else {
//       newItem = {
//         professional_id: id,
//         companies_id: selectedCompany,
//         commission: commissions
//       }
//     }
//     const updatedValues = [...dataToSend, newItem]
//     setValue('professional', updatedValues)
//   } else {
//     const dataToSend = watch('professional') || []

//     console.log('dataToSend: ', dataToSend);

//     const updatedValues = dataToSend.filter(
//       (item: Order) => item.professional_id !== id
//     )

//     setValue('professional', updatedValues)

//   }

// }
