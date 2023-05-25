import { UseFormReturn } from 'react-hook-form'

import { FormProps } from 'components/organisms'
import { ProfessionalProps } from 'components/organisms/Forms/Professional/types'

import api from 'api'
import { routes } from 'routes'
import { externRoutes } from 'routes'

export async function fetchProps(
  methods: UseFormReturn<FormProps['Company'], any>
) {
  const [
    { data: owners },
    { data: banks },
    { data: cnae },
    { data: uf }
  ] = await Promise.all([
    await api.get(routes.professional.list + '?limit=50'),
    await api.get(externRoutes.banks),
    await api.get(externRoutes.cnae),
    await api.get(externRoutes.uf)
  ])

  methods.setValue('options', {
    owners: owners.data
      .filter(
        (own: any) => own.job.name.substring(0, 7) === 'Diretor'
      )
      .map((own: ProfessionalProps) => ({
        label: own.name,
        value: String(own.id)
      })),
    banks: banks
      ?.filter((bank: any) => bank.ispb !== '')
      .map((bank: any) => ({
        label: `${bank.ispb} ${bank.name}`,
        value: bank.name
      })),
    uf: uf.map((uf: any) => ({
      label: uf.nome,
      value: uf.sigla
    })),
    cnae: cnae.map((cnae: any) => ({
      label: cnae.descricao,
      value: cnae.id
    }))
  })
}
