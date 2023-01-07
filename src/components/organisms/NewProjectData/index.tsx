import { Button, Input, Select, Typography, useTheme } from "@stardust-ds/react";
import { useState } from "react";
import { IconArrowPageRegistration } from "../../atoms/Icons/IconArrowPageRegistration";
import InputIconPosition from "../../atoms/InputIconPosition";
import MasterPage from "../../pages/MasterPage";

import {
  ContaineNewposition,
  Container,
  ContainerBase,
  ContainerButtonsFooter,
  ContainerInputs,
  ContainerInputsSecun,
} from "./style";
import {FormikProps} from "formik";
import { optionsProjects, optionsStatus } from "../../utils/OptionsAplication";

interface INewProject {
  DataProjects: OtherProps & FormikProps<FormProjects>;
}

const NewProject = ({ DataProjects }: INewProject | any) => {
  const { errors, isSubmitting, title, handleChange, values } =  DataProjects;
  const [option, setOption] = useState("");
  const { brand } = useTheme();
  return (
    <MasterPage>
      <>
        <ContainerBase>
          <InputIconPosition Icon={<IconArrowPageRegistration />} />
          <div style={{ marginTop: "0.3em" }}>
            <Typography type="h3"> Cadastrar novo projeto </Typography>
          </div>
        </ContainerBase>
        <Container>
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
                onChange={handleChange("name")}
              />
              <Input
                width={250}
                height=""
                label="ID do projeto"
                placeholder="ID do Projeto"
                value={values.id}
                onChange={handleChange("id")}
              />
              <Select
                label="Tipo de projeto"
                width={250}
                options={optionsProjects}
                // value={values.project_type_id}
                placeholder="Selecione"
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
                onChange={handleChange("date_start")}
              />
              <Input
                isFullWidth
                width={285}
                height=""
                label="Data Estimado"
                placeholder={"Data Estimado"}
                type="date"
                value={values.date_end_performed}
                onChange={handleChange("date_end_performed")}
              />
              <Select
                label="Status"
                width={250}
                options={optionsStatus}
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
          </ContaineNewposition>

          <ContainerButtonsFooter>
            <Button
              type="submit"
              bgColor="#CCD1D6"
              bStyle="solid"
              bWidth="hairline"
              style={{
                borderRadius: "25px",
                color: "#000",
                width: "130px",
                margin: "0 2em",
                font: "unset",
                fontSize: "15px",
              }}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              bgColor="#0066FF"
              bStyle="solid"
              bWidth="hairline"
              style={{
                borderRadius: "25px",
                color: "#ffffff",
                width: "145px",
                font: "unset",
                fontSize: "15px",
              }}
            >
              Salvar Projeto
            </Button>
          </ContainerButtonsFooter>
        </Container>
      </>
    </MasterPage>
  );
};

export default NewProject;
