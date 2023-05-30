import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Loading } from 'components/atoms'
import { PartialForm } from 'components/organisms'
import { AuthTemplate, CreateTemplate } from 'components/templates'

import { FormCompany } from './form'
import { fetchCompany } from './logic'
import { Container } from './style'

export const RegisterCompany = () => {
  const { id } = useParams()
  const [DefaultValue, setDefaultValue] = useState<
    PartialForm['Company'] | null
  >(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    if (id) {
      fetchCompany(id).then((data) => {
        setDefaultValue(data as PartialForm['Company'])
        setIsLoading(false)
      })
    } else {
      setIsLoading(false)
    }
  }, [id])

  return (
    <AuthTemplate>
      <CreateTemplate
        title={!!id ? 'Editar Empresa' : 'Cadastrar nova Empresa'}
      >
        {isLoading ? (
          <Container>
            <Loading />
          </Container>
        ) : (
          <FormCompany
            defaultValue={DefaultValue}
            isLoading={isLoading}
          />
        )}
      </CreateTemplate>
    </AuthTemplate>
  )
}
