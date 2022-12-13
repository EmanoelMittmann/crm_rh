import { Badge } from "@stardust-ds/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconThreePoints } from "../../../atoms/Icons/IconThreePoints";
import Modal from "../../../molecules/Modal";
import { ContainerShelf, ContainerShelfColumn } from "../../Professionals/style";
import { AlignItensProjects, ContainerProjectColumn, ContainerProjects } from "../style";


const ProjectsListing = ({ project } : any) => {
  const navigate = useNavigate();
  const [modal, setModal] = useState<boolean>(false);

  return (
    <ContainerShelf>
      <ContainerProjectColumn width="28%">
        <AlignItensProjects>{project.name}</AlignItensProjects>
      </ContainerProjectColumn>
      <ContainerProjectColumn width="25%">
        {project.tipo}
      </ContainerProjectColumn>
      <ContainerProjectColumn width="10%">
        {project.inicio}
      </ContainerProjectColumn>
      <ContainerProjectColumn width="10%">
        {project.status}
      </ContainerProjectColumn>
      <ContainerShelfColumn width="20%" justify="center" gap="3em">
        <div className="status">
          <Badge
            label={project.status ? "Ativo" : "Inativo"}
            variant="flat"
            bgColor={project.status ? "#1ECB4F26" : "#FF354126"}
            typographyProps={{
              textAlign: "center",
              color: project.status ? "#1ECB4F" : "#FF3541",
            }}
          />
        </div>
        <IconThreePoints onClick={() => setModal((prev) => !prev)} />
        {modal && (
          <Modal
            optionOne="Editar"
            eventOne={() => navigate("/home")}
            optionTwo="Excluir "
          />
        )}
      </ContainerShelfColumn>
    </ContainerShelf>
  );
};

export default ProjectsListing;