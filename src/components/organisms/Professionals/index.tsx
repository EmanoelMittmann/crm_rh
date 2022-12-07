import { ContainerChildren, ContainerMain } from "./style";
import { Input } from "@stardust-ds/react";
import { IconGlass } from "../../atoms/Icons/IconGlass";
import { Select } from "../../atoms/Select";
import { ButtonGeneric } from "../../atoms/ButtonGeneric";

const ProfessionalsMain = () => {
  return (
    <>
      <ContainerMain>
        <ContainerChildren paddingLeft="2em">
          <h3>Profissionais</h3>
        </ContainerChildren>
        <ContainerChildren paddingLeft="2em" gap="2em">
          <Input iconLeft={<IconGlass />} placeholder="Buscar..." />
          <Select placeholder="Cargos" value={[]} />
          <Select placeholder="Função" value={[]} />
          <ButtonGeneric
            Text="Cadastrar Novo"
            bRadius="500px"
            bgColor="#1ECB4F"
            color="white"
            height="44px"
            width="15em"
            left="15em"
          />
        </ContainerChildren>
      </ContainerMain>
    </>
  );
};

export default ProfessionalsMain;
