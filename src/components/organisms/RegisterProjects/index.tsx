import { brand } from "@stardust-ds/core/lib/esm/Brand";
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
    inicio: Date,
    status: true,
  },
];

export const RegisterProjects = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/NewProject");
  };

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
        <div style={{ width: "15%", marginLeft:"30em" }}>
          <Button
            typographyProps={{ fontWeight: "light", type: "p2" }}
            isFullWidth
            bRadius="md"
            height={45}
            bgColor={brand.color.positive.pure}
            mLeft="22em"
            onClick={handleNavigate}
          >
            Cadastrar Novo
          </Button>
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
