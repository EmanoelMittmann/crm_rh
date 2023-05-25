import * as yup from 'yup'





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

})

export const schemaUser = yup.object().shape({
  user_id: yup.number(),
  name: yup.string(),
  job_: yup.string(),
  hours_mounths_estimated: yup
    .number()
    .nullable()
    .test(
      'horas validas',
      'O Campo Hora/mês deve ser maior que 0',
      function (value) {
        const hoursMounthsEstimated = this.resolve(yup.ref('hours_mounths_estimated'));
        if (hoursMounthsEstimated) {
          return Number(value) > 0;
        }
        return true;
      }).required('Campo obrigatório'),

  extra_hours_estimated: yup
    .number()
    .nullable()
    .test(
      'horas validas',
      'Campo vazio, inclua zero caso não exista uma estimativa de horas/extra',
      function (value) {
        const extraHoursEstimated = this.resolve(yup.ref('extra_hours_estimated'));
        if (extraHoursEstimated) {
          return Number(value) > 0;
        }
        return true;
      }).required('Campo obrigatório'),
})




