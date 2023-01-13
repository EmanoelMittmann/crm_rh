import { Button, Input, Select, Typography } from "@stardust-ds/react";
import { useNavigate } from "react-router";
import { IconGlass } from "../../atoms/Icons/IconGlass";
import { Footer } from "../../molecules/Footer";
import HeaderProjects from "../../molecules/HeaderProjects";
import ProjectsListing from "./ProjectsListing";
import {
  ContainerChildrenProjects,
  ContainerChildrenTable,
  ContainerMain,
} from "./style";
import { useState, useEffect } from "react";
import api from "../../../api/api";

export const ProjectsAll = () => {
  const [projects, setProjects] = useState([]);
  const [typesOptions, setTypesOptions] = useState([]);
  const [statusOptions, setStatusOptions] = useState([]);
  const navigate = useNavigate();
  const params = {};


  const handleNavigate = () => {
    navigate("/NewProject");
  };

  const getProjects = async () => {
    const { data } = await api({
      method: "get",
      url: `/project/?limit=5`,
      params: params,
    });
    setProjects(data.data);
  };

  const getTypesOptions = async () => {
    const { data } = await api({
      method: "get",
      url: `/projectType`,
    });
    setTypesOptions(data.data);
  };
    const allOptions = [...typesOptions,{ label: "Todos", value: "Todos" }];

  const getStatusOptions = async () => {
    const { data } = await api({
      method: "get",
      url: `/projectStatus`,
    });
    setStatusOptions(data.data);
  };
  const allOptionsStatus = [...statusOptions, { label: "Todos", value: "Todos" }];

  // console.log("Todos Projetos", projects);
  console.log("Tipo de Projetos", typesOptions);
  // console.log("Status do Projetos", allOptionsStatus);

  useEffect(() => {
    getProjects();
    getTypesOptions();
    getStatusOptions();
  }, []);

  return (
    <ContainerMain>
      <ContainerChildrenProjects left="9em">
        <Typography type="h3">Projetos</Typography>
      </ContainerChildrenProjects>

      <ContainerChildrenProjects left="9em" gap="2em">
        <Input
          iconLeft={<IconGlass />}
          placeholder="Buscar..."
          width={300}
          style={{ marginTop: "4px" }}
        />
        <Select placeholder="Tipo" options={allOptions} onSelect={() => setTypesOptions} />
        <Select placeholder="Status" options={allOptionsStatus} onSelect={() => {}} />
        <Button
          typographyProps={{ fontWeight: "light", type: "p2" }}
          style={{
            marginLeft: "77%",
            position: "absolute",
            borderRadius: "25px",
            color: "#ffffff",
          }}
          bgColor="#1ECB4F"
          bWidth="20px"
          bStyle="solid"
          onClick={handleNavigate}
        >
          Cadastrar Novo
        </Button>
      </ContainerChildrenProjects>
      <ContainerChildrenTable>
        <HeaderProjects />
        <div className="table">
          {projects.map((project) => (
            <ProjectsListing  project={project} />
          ))}
        </div>
      </ContainerChildrenTable>
      <Footer />
    </ContainerMain>
  );
};
