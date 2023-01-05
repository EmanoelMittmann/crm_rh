import { Button, Input, Select, Typography } from "@stardust-ds/react";
import { useState } from "react";
import { IconArrowPageRegistration } from "../../atoms/Icons/IconArrowPageRegistration";
import InputIconPosition from "../../atoms/InputIconPosition";
import MasterPage from "../../pages/MasterPage";

import {
  ContaineNewposition,
  ContainerBase,
  ContainerInputs,
  ContainerInputsSecun,
} from "./style";
import {FormikProps} from "formik";


const NewProject = (props: FormMessage & FormikProps<FormProjects>) => {
  const { touched, errors, isSubmitting, message, handleChange, values } = props
  const [option, setOption] = useState("");

  const Options = [
    { id: 1, name: "Ativo" },
    { id: 2, name: "Inativo" },
  ];
  
  console.log(props);

  return (
    <MasterPage>
      <form>
        <ContainerBase>
          <InputIconPosition Icon={<IconArrowPageRegistration />} />
          <div style={{ marginTop: "0.3em" }}>
            <Typography type="h3"> Cadastrar novo projeto </Typography>
          </div>
        </ContainerBase>
        <ContaineNewposition>
          <div style={{ margin: "2em" }}>
            <Typography type="h3">Dados do projeto</Typography>
          </div>
          <ContainerInputs>
            <Input
              isFullWidth
              label="Nome do projeto"
              placeholder="Nome do Projeto"
              value={""}
              onChange={handleChange("name")}
            />
            <Input
              width={250}
              height=""
              label="ID do projeto"
              placeholder="ID do Projeto"
              value={""}
              onChange={handleChange("id")}
            />
            <Select
              label="Tipo de projeto"
              width={250}
              options={[]}
              // value={values.project_type_id}
              placeholder="Selecione"
              onSelect={() => setOption("")}
            />
          </ContainerInputs>

          <ContainerInputsSecun style={{ marginTop: "0.5em" }}>
            <Input
              isFullWidth
              width={285}
              height=""
              label="Data de Início"
              placeholder="Data de Início"
              type="date"
              value={values.date_start}
              onChange={() => {}}
            />
            <Input
              isFullWidth
              width={285}
              height=""
              label="Data Estimado"
              placeholder={"Data Estimado"}
              type="date"
              value={values.date_end_performed}
              onChange={() => {}}
            />
            <Select
              label="Status"
              width={250}
              options={[]}
              // value={values.project_status_id}
              placeholder="Selecione"
              onSelect={() => setOption("")}
            />
            <Input
              isFullWidth
              placeholder="R$ 00.00"
              label="Custo estimado"
              value={values.team_cost}
              onChange={handleChange}
            />
          </ContainerInputsSecun>
          <Button type="submit">Enviar</Button>
        </ContaineNewposition>
      </form>
    </MasterPage>
  );
};

export default NewProject;
