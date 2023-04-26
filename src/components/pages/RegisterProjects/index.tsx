import api from "api";
import { Form, FormProps } from "components/organisms";
import { AuthTemplate, CreateTemplate } from "components/templates";
import { FormProvider, useForm } from "react-hook-form";
import { routes } from "routes";


const RegisterProjects = () => {
  const methods = useForm<FormProps['Project']>({
    defaultValues: {

    }
  })
  async function fetchPropsProject() {
    const { data: permissions } = await api.get(
      routes.permission.list
    )
    methods.setValue('options', {
      permissions
    } as FormProps['Project']['options'])
    const { data: project_type } = await api.get(routes.project_type.list)
  
    methods.setValue('options',{
      permissions,
      projects_type: project_type.data.map((project_type: any)=> ({
        label: project_type.name, 
        value: project_type.id
      })),
    })
  }


  //  async function onSubmit(data: FormProps['Project']) {
  //    const sanitizeData = {
  //      ...data,

  //      }
  //    }

  //    await api.post(routes.project.register, sanitizeData)
  //  }

  return (
    <>
      <AuthTemplate>
        <CreateTemplate title='Cadastrar novo projeto'>
          <FormProvider {...methods}>
            <form >
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

