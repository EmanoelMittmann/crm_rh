
import { Button, Input, Typography } from "@stardust-ds/react";
import { useNavigate } from "react-router";
import { IconGlass } from "../../atoms/Icons/IconGlass";
import { Select } from "../../atoms/Select";
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

const objectProject = [
  {
    id: "12522",
    name: "Easy Delivery",
    tipo: "Planning",
    inicio: "11/12/2022",
    status: true,
  },
];

export const ProjectsAll = () => {
  const [projects, setProjects] = useState([]);
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

  console.log(projects);

  useEffect(()=>{
getProjects()
  },[])

  return (
    <ContainerMain>
      <ContainerChildrenProjects left="9em">
        <Typography type="h3">Projetos</Typography>
      </ContainerChildrenProjects>
      <ContainerChildrenProjects left="9em" gap="2em">
        <Input iconLeft={<IconGlass />} placeholder="Buscar..." width={300} />
        <Select placeholder="Tipo" value={[]} />
        <Select placeholder="Status" value={[]} />
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
            <ProjectsListing key={project} project={project} />
          ))}
        </div>
      </ContainerChildrenTable>
      <Footer/>
    </ContainerMain>
  );
};
