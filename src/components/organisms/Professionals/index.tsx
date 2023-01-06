import { ContainerChildren, ContainerMain } from "./style";
import { Input, Typography } from "@stardust-ds/react";
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
        <div className="Main">
          <ContainerChildren left="2em">
            <Typography type="h3">Profissionais</Typography>
          </ContainerChildren>
          <ContainerChildren left="2em" width="100%" gap="2em">
            <Input
              iconLeft={<IconGlass />}
              placeholder="Buscar..."
              width={300}
              style={{ marginTop: "4px" }}
            />
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
              onClick={() => navigate("/RegisterProfessionals")}
            />
          </ContainerChildren>
          <ContainerChildren>
            <div className="table">
              <Header />
              {object.map((data) => (
                <Shelf data={data} />
              ))}
            </div>
          </ContainerChildren>
        </div>
        <Footer />
      </ContainerMain>
    </>
  );
};

export default ProfessionalsMain;
