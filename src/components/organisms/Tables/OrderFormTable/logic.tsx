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

  return (
    <>
      <div>
        <h1>OrderForm</h1>
      </div>
    </>
  )
}
