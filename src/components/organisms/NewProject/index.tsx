import { Input, Typography, Select } from "@stardust-ds/react";
import { useState } from "react";
import { IconArrowPageRegistration } from "../../atoms/Icons/IconArrowPageRegistration";
import InputIconPosition from "../../atoms/InputIconPosition";
import { Navbar } from "../../molecules/NavBar";
import { Sidebar } from "../../molecules/SideBar";
import {
  ContaineNew,
  ContaineNewposition,
  ContaineNewRegistration,
  ContainerBase,
  ContainerInputs,
} from "./style";

const NewProject = () => {
    const [option, setOption] = useState({})
  return (
    <>
      <ContaineNewRegistration>
        <Sidebar />
        <Navbar />
      </ContaineNewRegistration>
      <ContainerBase>
        <InputIconPosition Icon={<IconArrowPageRegistration />} />
        <div  style={{ margin: "0.3em" }}>
          <Typography type="h3">Cadastrar novo projeto</Typography>
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
            value={""}
            onChange={() => {}}
          />
          <div style={{ marginTop: "-0.5em" }}>
            <Select
              placeholder="Selecione"
              options={[]}
              label="Tipo de Projeto"
              onSelect={(e: any) => setOption(e || {})}
            />
          </div>
        </ContainerInputs>
        <ContainerInputs>
          <Input type="date" label="Dade início" />
        </ContainerInputs>
      </ContaineNewposition>
    </>
  );
};

export default NewProject;
