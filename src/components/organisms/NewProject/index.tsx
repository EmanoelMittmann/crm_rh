import { Input, Select, Typography } from "@stardust-ds/react";
import { ChangeEvent, FormEvent, useState } from "react";
import { TypeOf } from "yup";

import { IconArrowPageRegistration } from "../../atoms/Icons/IconArrowPageRegistration";

import IconBottomVerticalArrow from "../../atoms/Icons/IconBottomVertivalArrow";

import { InputDate } from "../../atoms/InputDate";
import InputIcon from "../../atoms/InputIcon";
import InputIconPosition from "../../atoms/InputIconPosition";
// import { Select } from "../../atoms/Select";
import { Navbar } from "../../molecules/NavBar";
import { Sidebar } from "../../molecules/SideBar";
import {
  ContaineNew,
  ContaineNewposition,
  ContaineNewRegistration,
  ContainerBase,
  ContainerInputs,
  ContainerInputsSecun,
} from "./style";

const NewProject = () => {
  const [option, setOption] = useState("");


  return (
    <>
      <ContaineNewRegistration>
        <Sidebar />
        <Navbar />
      </ContaineNewRegistration>
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
            onChange={() => {}}
          />
          <Input
            width={250}
            height=""
            label="ID do projeto"
            placeholder="ID do Projeto"
            value={""}
            onChange={() => {}}
          />
          <Select
            label="Tipo de projeto"
            width={250}
            options={[]}
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
            value={""}
            onChange={() => {}}
          />
          <Input
            isFullWidth
            width={285}
            height=""
            label="Data Estimado"
            placeholder={"Data Estimado"}
            type="date"
            value={""}
            onChange={() => {}}
          />
          <Select
            label="Status"
            width={250}
            options={[]}
            placeholder="Selecione"
            onSelect={() => setOption("")}
          />
          <Input
            isFullWidth
            placeholder="R$ 00.00"
            label="Custo estimado"
            value={""}
            onChange={() => {}}
          />
        </ContainerInputsSecun>
      </ContaineNewposition>
    </>
  );
};

export default NewProject;
