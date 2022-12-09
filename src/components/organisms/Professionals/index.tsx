import { ContainerChildren, ContainerMain } from "./style";
import { Input } from "@stardust-ds/react";
import { IconGlass } from "../../atoms/Icons/IconGlass";
import { Select } from "../../atoms/Select";
import { ButtonGeneric } from "../../atoms/ButtonGeneric";
import Header from "../../molecules/Header";
import { Shelf } from "./shelf";
import api from "../../../api/api";

const object = [
  {
    "id": "6391f2d5b92ad76f6ab2394e",
    "avatar": "https://cdn-icons-png.flaticon.com/512/147/147144.png",
    "name": "Lynne Gilmore",
    "email": "lynnegilmore@accupharm.com",
    "status": true,
    "company": "UBISTART",
    "phone": "+1 (826) 470-3995",
    "address": "311 Stryker Court, Martinez, Tennessee, 3122"
  },
];

const ProfessionalsMain = () => {

  return (
    <>
      <ContainerMain>
        <ContainerChildren paddingLeft="2em">
          <h3>Profissionais</h3>
        </ContainerChildren>
        <ContainerChildren paddingLeft="2em" gap="2em">
          <Input iconLeft={<IconGlass />} placeholder="Buscar..." width={300} />
          <Select placeholder="Cargos" value={[]} />
          <Select placeholder="Função" value={[]} />
          <ButtonGeneric
            Text="Cadastrar Novo"
            bRadius="500px"
            bgColor="#1ECB4F"
            color="white"
            height="44px"
            width="15em"
            left="22em"
          />
        </ContainerChildren>
        <ContainerChildren>
          <div className="table">
            <Header />
            {object.map(data => <Shelf data={data}/>)}
          </div>
        </ContainerChildren>
      </ContainerMain>
    </>
  );
};

export default ProfessionalsMain;
