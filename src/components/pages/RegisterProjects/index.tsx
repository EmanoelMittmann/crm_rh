import api from "api";
import { Form, FormProjectProps } from "components/organisms";
import { AuthTemplate, CreateTemplate } from "components/templates";
import { useDebounce } from "hooks";
import { FormProvider, useForm } from "react-hook-form";
import { routes } from "routes";
import { ProjectProps } from "types";


const RegisterProjects = () => {
  const methods = useForm<FormProjectProps['Project']>({
    defaultValues: {

    }
  })
  async function fetchPropsProject() {
    const { data: permissions } = await api.get(
      routes.permission.list
    )
    methods.setValue('options', {
      permissions
    } as FormProjectProps['Project']['options'])

    const { data: project_type } = await api.get(routes.project_type.list)
    const { data: status } = await api.get(routes.status.list)
    console.log('project_type: ', project_type);

    methods.setValue('options', {
      project_types: project_type.data.map((project_type: ProjectProps) => ({
        label: project_type.name,
        value: project_type.id,
      })),
      status_projects: status.data.map((status: ProjectProps) => ({
        label: status.name,
        value: status.id,
      })),
    } as FormProjectProps['Project']['options'])
  }


  async function onSubmit(data: FormProjectProps['Project']) {
    const sanitizeData = {
      ...data,
      id: data.id?.value,
      name: data.name?.value,
      date_start: data.date_start?.value,
      date_end: data.date_end?.value,
      date_start_performed: data.date_start_performed?.value,
      date_end_performed: data.date_end_performed?.value,
      team_cost: data.team_cost?.value,
      project_type: data.project_type?.name?.value,
      status: data.status?.name?.value,
    }

    await api.post(routes.project.register, sanitizeData)
  }


  useDebounce({
    fn: fetchPropsProject,
    delay: 0,
    listener: []
  })
  return (
    <>
      <AuthTemplate>
        <CreateTemplate title='Cadastrar novo projeto'>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} >
              <Form.Project />
              <button>salvar</button>
            </form>
          </FormProvider>
        </CreateTemplate>
      </AuthTemplate>
    </>
  );
};

export default RegisterProjects;

