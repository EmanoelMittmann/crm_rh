import { brand } from "@stardust-ds/core/lib/esm/Brand";
import { Button, Input, Typography } from "@stardust-ds/react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import ButtonTemplate from "../../atoms/ButtonTemplate";
import { IconGlass } from "../../atoms/Icons/IconGlass";
import { Select } from "../../atoms/Select";
import { Footer } from "../../molecules/Footer";
import HeaderProjects from "../../molecules/HeaderProjects";
import { alterObject, DEFAULTSELECT } from "../../utils/btnSelects";
import ProjectsListing from "./ProjectsListing";
import {
  ContainerChildrenProjects,
  ContainerChildrenTable,
  ContainerMain,
} from "./style";

const objectProject = [
  {
    id: "12522",
    name: "Easy Delivery",
    tipo: "Planning",
    inicio: "11/12/2022",
    status: true,
  },
];

export const RegisterProjects = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/NewProject");
  };
    const location = useLocation();
    const [selects, setSelects] = useState(DEFAULTSELECT);

    function handleSelect(btnSelect: string) {
      setSelects(alterObject(selects, btnSelect));
    }

  console.log(navigate);

  return (
    <ContainerMain>
      <ContainerChildrenProjects left="2em">
        <Typography type="h3">Projetos</Typography>
      </ContainerChildrenProjects>
      <ContainerChildrenProjects left="2em" gap="2em">
        <Input iconLeft={<IconGlass />} placeholder="Buscar..." width={300} />
        <Select placeholder="Tipo" value={[]} />
        <Select placeholder="Status" value={[]} />

        <div style={{ marginLeft: "25em" }}>
          <ButtonTemplate
            Text="Cadastrar Novo"
            color="#e6f3ea"
            fill="#dee0df"
            bgActive="#1ECB4F"
            colorActive="white"
            fillActive="white"
            onClick={() => {
              navigate("/NewProject");
              handleSelect("newprojects");
            }}
            isActive={selects.newprojects}
          />
        </div>
      </ContainerChildrenProjects>
      <ContainerChildrenTable>
        <HeaderProjects />
        <div className="table">
          {objectProject.map((projects) => (
            <ProjectsListing project={projects} />
          ))}
        </div>
      </ContainerChildrenTable>

      <Footer />
    </ContainerMain>
  );
};
