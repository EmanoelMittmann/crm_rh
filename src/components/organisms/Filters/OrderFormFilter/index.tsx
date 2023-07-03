import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { Input } from '@stardust-ds/react'
import { List } from 'contexts'

import { Button, IconGlass } from 'components/atoms'

import { Container, Main } from './style'

export const OrderFormFilter = () => {
  const { meta, handleSearch, checked, setChecked, selectSendProfessionals, professionalOS, setSelectSendProfessionals } =
  useContext(List.OrderOfServiceprofessionalOS.Context)
  console.log('selectSendProfessionals: ', selectSendProfessionals);
  console.log('professionalOS: ', professionalOS);
  
  console.log('checked: ', checked);
  const handleSelectAll = () => {
    const allds = professionalOS.map((item) => ({
      name: item.name,
      professional_id: item.id,
      commission: item.commission ?  undefined : 0 ,
      companies_id: item.company_id,
      isCommission : item.commission
    }))

    setSelectSendProfessionals(allds)

    const newChecked = allds.reduce(
      (acc, item) => ({ ...acc, [item.professional_id]: true }),
      {}
      )
      console.log('allds: ', allds);
    setChecked(newChecked)
 
  }

  const { search } = meta

  return (
    <Main>
      <Container gap='1em'>
        <Input
          width={230}
          placeholder='Buscar...'
          iconLeft={<IconGlass />}
          value={search}
          onChange={(e) => handleSearch(e.target?.value)}
        />
      </Container>
      <Button.New
        text='Selecionar todos'
        onClick={() => handleSelectAll()}
        type='button'
      />
    </Main>
  )
}
