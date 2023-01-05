
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
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/NewProject");
  };

  console.log();

  return (
    <ContainerMain>
      <ContainerChildrenProjects left="2em">
        <Typography type="h3">Projetos</Typography>
      </ContainerChildrenProjects>
      <ContainerChildrenProjects left="2em" gap="2em">
        <Input iconLeft={<IconGlass />} placeholder="Buscar..." width={300} />
        <Select placeholder="Tipo" value={[]} />
        <Select placeholder="Status" value={[]} />
        <Button
          typographyProps={{fontWeight: "light",type: "p2",}}
          style={{marginLeft: "73%",position: "absolute",borderRadius: "25px",color: "#ffffff",}}
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
          {objectProject.map((projects) => (
            <ProjectsListing key={projects.id}  project={projects} />
          ))}
        </div>
      </ContainerChildrenTable>

      <Footer />
    </ContainerMain>
  );
};
