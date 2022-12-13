import { Typography } from "@stardust-ds/react";
import { IconArrowPageRegistration } from "../../atoms/Icons/IconArrowPageRegistration"
import InputIconPosition from "../../atoms/InputIconPosition"
import { Navbar } from "../../molecules/NavBar";
import { Sidebar } from "../../molecules/SideBar";
import { ContainerMain } from "../../molecules/SideBar/style"
import { ContaineNew, ContaineNewRegistration, ContainerBase } from "./style";


const NewProject = () => {

  return (
    <>
      <ContaineNewRegistration>
        <Sidebar />
        <Navbar />
      </ContaineNewRegistration>
      <ContainerBase>
        <InputIconPosition Icon={<IconArrowPageRegistration />} />
        <div style={{ marginTop: "0.5em" }}>
          <Typography type="h3">Cadastrar novo projeto</Typography>
        </div>
      </ContainerBase>
      <ContaineNew>
        <div style={{margin: "2em"}}>
          <Typography type="h3">Dados do projeto</Typography>
        </div>
      </ContaineNew>
    </>
  );
}

export default NewProject