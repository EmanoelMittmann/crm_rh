import { ISelectProps } from 'types'
import { ContainerSelect, Master, Option } from './style'

export const Select = ({
  value,
  placeholder,
  label,
  width
}: ISelectProps) => {
  return (
    <Master>
      <h5>{label}</h5>
      <ContainerSelect w={width ? width : '22em'} h='3.3em'>
        {value ? (
          <Option selected>{placeholder}</Option>
        ) : (
          value.map((object: any) => {
            ;<Option key={object.id}>{object.name}</Option>
          })
        )}
      </ContainerSelect>
    </Master>
  )
}
