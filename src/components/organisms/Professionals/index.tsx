import { ContainerChildren, ContainerMain } from "./style";
import { Input } from "@stardust-ds/react";
import { IconGlass } from "../../atoms/Icons/IconGlass";
import { Select } from "../../atoms/Select";
import { ButtonGeneric } from "../../atoms/ButtonGeneric";
import Header from "../../molecules/Header";
import { Shelf } from "./shelf";
import { Footer } from "../../molecules/Footer";
import { useNavigate } from "react-router-dom";

const object = [
  {
    id: "6391f2d5b92ad76f6ab2394e",
    avatar: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
    name: "Lynne Gilmore",
    email: "lynnegilmore@accupharm.com",
    status: true,
    company: "UBISTART",
    phone: "(826) 470-3995",
    address: "311 Stryker Court, Martinez, Tennessee, 3122",
  },
];

const ProfessionalsMain = () => {
  const navigate = useNavigate();
  return (
    <>
      <ContainerMain>
        <ContainerChildren left="2em">
          <h3>Profissionais</h3>
        </ContainerChildren>
        <ContainerChildren left="2em" gap="1em" width="40%">
          <div className="filters">
            <Input
              iconLeft={<IconGlass />}
              placeholder="Buscar..."
              width={280}
            />
            <Select placeholder="Cargos" value={[]} width="15rem" />
            <Select placeholder="Função" value={[]} width="15rem" />
            <ButtonGeneric
              Text="Cadastrar Novo"
              bRadius="500px"
              bgColor="#1ECB4F"
              color="white"
              height="44px"
              left="12em"
              width="15em"
              onClick={() => navigate("/RegisterProfessionals")}
            />
          </div>
        </ContainerChildren>
        <ContainerChildren>
          <div className="table">
            <Header />
            {object.map((data) => (
              <Shelf data={data} />
            ))}
          </div>
        </ContainerChildren>
      </ContainerMain>
    </>
  );
};

export default ProfessionalsMain;
