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

const NewProject = ({ DataProjects }: any) => {
  const { values, errors, handleChange } = DataProjects;
  const [option, setOption] = useState("");

  const Options = [
    { id: 1, name: "Ativo" },
    { id: 2, name: "Inativo" },
  ];

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
              value={values.name}
              onError={values.errors}
              onChange={handleChange("name")}
            />
            <Input
              width={250}
              height=""
              label="ID do projeto"
              placeholder="ID do Projeto"
              value={values.id}
              onChange={() => {}}
            />
            <Select
              label="Tipo de projeto"
              width={250}
              options={[]}
              value={values.project_type_id}
              hasError={values.errors}
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
              placeholder="ID do Projeto"
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
              value={values.project_status_id}
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
