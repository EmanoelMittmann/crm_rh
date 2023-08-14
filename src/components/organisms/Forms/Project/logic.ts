import * as yup from 'yup'

import { validation } from '../Professional/logic'

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
              return date_end_performed > date_start_performed
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

  users: yup.object().shape({
    date_end_allocation: yup
      .string()
      .nullable()
      .when(
        'date_start_allocation',
        (date_start_allocation, schema) =>
          date_start_allocation
            ? schema.test(
                'date_range',
                'A data final deve ser igual ou maior que a data atual',
                function (date_end_allocation: string) {
                  return date_end_allocation >= date_start_allocation
                }
              )
            : schema
      )
      .required(validation.required),
    date_start_allocation: yup.string().nullable()
  })
})
