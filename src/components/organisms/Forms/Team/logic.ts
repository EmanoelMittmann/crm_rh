import * as yup from 'yup'


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
        const hoursMonth = this.resolve(yup.ref('hours_mounths_estimated'));
        if (hoursMonth) {
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
        const extraHour = this.resolve(yup.ref('extra_hours_estimated'));
        if (extraHour) {
          return Number(value) > 0;
        }
        return true;
      }).required('Campo obrigatório'),

  extra_hours_performed: yup
    .number()
    .nullable()
    .test(
      'horas validas',
      'Campo vazio, inclua zero caso não exista horas extras realizadas',
      function (value) {
        const extraHoursPerformed = this.resolve(yup.ref('extra_hours_performed'));
        if (extraHoursPerformed) {
          return Number(value) > 0;
        }
        return true;
      }).required('Campo obrigatório'),
});




