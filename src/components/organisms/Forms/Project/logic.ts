import {SelectOption } from "./types"
import * as yup from 'yup'


export const validationSchema = yup.object().shape({
  name: yup.string().required('Campo obrigatório'),
  id: yup.string().required('Campo obrigatório'),
  project_type_id: yup.number().required('Campo obrigatório'),
  date_start: yup.string(),
  date_end: yup.string().when('date_start', (date_start, schema) =>
    date_start
      ? schema
        .required('Campo obrigatório')
        .test(
          'date_range',
          'A data final deve ser maior que a data inicial',
          function (date_end: string) {
            return new Date(date_end) > new Date(date_start);
          }
        )
      : schema
  ),
  date_start_performed: yup.string(),
  date_end_performed: yup.string().when('date_start', (date_start_performed, schema) =>
    date_start_performed
      ? schema
        .required('Campo obrigatório')
        .test(
          'date_range',
          'A data final deve ser maior que a data inicial',
          function (date_end_performed: string) {
            return new Date(date_end_performed) > new Date(date_start_performed);
          }
        )
      : schema
  ),
  project_status_id: yup.number().required('Campo obrigatório'),
  team_cost: yup.number(),
});




export function GenerateOption(data: Object): SelectOption[] {
  return Object.values(data).map((key: string) => ({
    label: key,
    value: key
  }))
}
