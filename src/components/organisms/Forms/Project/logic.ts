import * as yup from 'yup'

export const validation = {
  required: 'Campo obrigatório',
  min: (
    value: number,
    min: number,
    message: string = 'Campo inválido'
  ) => {
    if (value < min) return message

    return true
  }
}

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
    date_start_allocation: yup.string().nullable(),
    date_end_allocation: yup
      .string()
      .nullable()
      .test(
        'data',
        'A data deve ser igual ou anterior ao dia atual',
        function (value) {
          if (!value) return true
          const today = new Date()
          const date = new Date(value)
          return date <= today
        }
      )
  })
})
