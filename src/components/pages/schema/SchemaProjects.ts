import * as yup from 'yup'

export const registerSchemaProjects = yup.object().shape({
  name: yup.string().required("Campo Obrigatório"),
  date_start: yup.string().required("Campo Obrigatório"),
  date_end: yup.string().required("Campo Obrigatório"),
  date_start_performed: yup.string().required("Campo Obrigatório"),
  date_end_performed: yup.string(),
  project_status_id: yup.number().required("Campo Obrigatório"),
  project_type_id: yup.number().required("Campo Obrigatório"),
  team_cost: yup.string().required("Campo Obrigatório"),
  id: yup.number().required("Campo Obrigatório"),
});
