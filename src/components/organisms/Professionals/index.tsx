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
  {
    "id": "6391f2d5693ad8ae71fce944",
    "avatar": "https://cdn-icons-png.flaticon.com/512/147/147144.png",
    "name": "Avis Shepherd",
    "email": "avisshepherd@accupharm.com",
    "status": false,
    "company": "PIGZART",
    "phone": "+1 (955) 440-2410",
    "address": "810 Howard Alley,Virginia"
  },
  {
    "id": "6391f2d58fed2013945d9939",
    "avatar": "https://cdn-icons-png.flaticon.com/512/147/147144.png",
    "name": "Vickie Moreno",
    "email": "vickiemoreno@accupharm.com",
    "status": true,
    "company": "EMTRAK",
    "phone": "+1 (834) 473-2029",
    "address": "937 Johnson Street, Alfarata, New York, 9750"
  },
  {
    "id": "6391f2d57b7f973e6f79e911",
    "avatar": "https://cdn-icons-png.flaticon.com/512/147/147144.png",
    "name": "Kathy Leon",
    "email": "kathyleon@accupharm.com",
    "status": true,
    "company": "PARCOE",
    "phone": "+1 (919) 586-2573",
    "address": "584 Crosby Avenue, Dante, California, 3109"
  },
  {
    "id": "6391f2d5371a16f84f57922e",
    "avatar": "https://cdn-icons-png.flaticon.com/512/147/147144.png",
    "name": "Cohen Dawson",
    "email": "cohendawson@accupharm.com",
    "status": false,
    "company": "ACCIDENCY",
    "phone": "+1 (954) 572-3612",
    "address": "325 Kossuth Place, Delshire, Vermont, 5668"
  },
  {
    "id": "6391f2d5c596c578a8d0a295",
    "avatar": "https://cdn-icons-png.flaticon.com/512/147/147144.png",
    "name": "Ramos Pate",
    "email": "ramospate@accupharm.com",
    "status": true,
    "company": "SUNCLIPSE",
    "phone": "+1 (923) 423-2403",
    "address": "949 Cumberland Street, Southview, Florida, 1530"
  },
  {
    "id": "6391f2d5cfd96c18302f2d25",
    "avatar": "https://cdn-icons-png.flaticon.com/512/147/147144.png",
    "name": "Garrison Foley",
    "email": "garrisonfoley@accupharm.com",
    "status": false,
    "company": "JUMPSTACK",
    "phone": "+1 (982) 479-3399",
    "address": "337 Tampa Court, Balm, District Of Columbia, 3289"
  }
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
            left="14em"
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
