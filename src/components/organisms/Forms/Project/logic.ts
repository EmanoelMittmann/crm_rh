import * as yup from 'yup'
import { SelectOption } from './types'

export const validationSchema = yup.object().shape({
  name: yup.string().required('Campo obrigatório'),
  id: yup.string().required('Campo obrigatório'),
  project_type_id: yup
    .mixed()
    .test({
      name: 'required',
      message: 'Campo obrigatório',
      test: function (value) {
        return value && value.value !== '' && value.label !== ''
      }
    })
    .required('Campo obrigatório'),
  date_start: yup.string().nullable(),
  date_end: yup
    .string()
    .nullable()
    .when('date_start', (date_start, schema) =>
      date_start
        ? schema.test(
          'date_range',
          'A data final deve ser maior que a data inicial',
          function (date_end: string) {
            return date_end >= date_start
          }
        )
        : schema
    ),
  date_start_performed: yup.string().nullable(),
  date_end_performed: yup
    .string()
    .nullable()
    .when('date_start_performed', (date_start_performed, schema) =>
      date_start_performed
        ? schema.test(
          'date_range',
          'A data final deve ser maior que a data inicial',
          function (date_end_performed: string) {
            return date_end_performed >= date_start_performed
          }
        )
        : schema
    ),
  project_status_id: yup
    .mixed()
    .test({
      name: 'required',
      message: 'Campo obrigatório',
      test: function (value) {
        return value && value.value !== '' && value.label !== ''
      }
    })
    .required('Campo obrigatório'),

    userProject: yup.object().shape({
      user_id: yup.number(),
      name: yup.string(),
      job_: yup.number(),
      hours_mounths_estimated: yup
        .number()
        .nullable(),
        // .required('Campo obrigatório')
        // .test('valid-hours', 'Campo horas/mês deve ser maior que zero(0)', function (value) {
        //   return value !== null && value !== undefined && value > 0;
        // }),
      extra_hours_estimated: yup
        .number()
        .nullable()
        // .required('Campo obrigatório')
        // .test('valid-hours', 'Campo horas/mês deve ser maior que zero(0)', function (value) {
        //   return value !== null && value !== undefined && value > 0;
        // }),

      })
    })
      

export function GenerateOption(data: Object): SelectOption[] {
  return Object.values(data).map((key: string) => ({
    label: key,
    value: key
  }))
}
