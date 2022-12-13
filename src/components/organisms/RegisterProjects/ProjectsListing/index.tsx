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
      <ContainerProjectColumn width="27.5%">
        <AlignItensProjects>{project.name}</AlignItensProjects>
      </ContainerProjectColumn>
      <ContainerProjectColumn width="15%">
        {project.tipo}
      </ContainerProjectColumn>
      <ContainerProjectColumn width="18%">
        {project.Date}
      </ContainerProjectColumn>
      <ContainerProjectColumn width="14.5%">
        {project.status}
      </ContainerProjectColumn>
      <ContainerShelfColumn width="19%" justify="center" gap="3em">
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