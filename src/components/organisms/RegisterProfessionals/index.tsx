import { IconLeftArrow } from "../../atoms/Icons/IconLeftArrow";
import { AlignItens } from "../Professionals/style";
import { Input } from "@stardust-ds/react";
import {
  ContainerChildren,
  ContainerMain,
  ContainerRegisterProfessional,
  ContainerRow,
} from "./style";
import RegisterInputs from "./RegisterInputs";

const RegisterProfessionalMain = () => {
  return (
    <ContainerMain>
      <ContainerChildren left="2em">
        <AlignItens>
          <IconLeftArrow />
          Cadastrar Novo Profissional
        </AlignItens>
      </ContainerChildren>
      <ContainerRegisterProfessional>
        <ContainerChildren left="1.5em" top="1em">
          <h3>Dados Pessoais</h3>
        </ContainerChildren>
        <RegisterInputs />
      </ContainerRegisterProfessional>
    </ContainerMain>
  );
};

export default RegisterProfessionalMain;
