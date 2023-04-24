import { AuthTemplate, CreateTemplate } from "components/templates";


 const RegisterProjects = () => {
  

  return (
     <>
 <AuthTemplate>
      <CreateTemplate title='Cadastrar novo projeto'>
        {/* <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <Form.Project />
            <button>salvar</button>
          </form>
        </FormProvider> */}
      </CreateTemplate>
    </AuthTemplate>
      </>
  );
};

export default RegisterProjects;

