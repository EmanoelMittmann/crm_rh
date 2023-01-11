import { ContainerChildren, ContainerMain } from "./style";
import { Button, Input, Typography } from "@stardust-ds/react";
import { IconGlass } from "../../atoms/Icons/IconGlass";
import { Select } from "../../atoms/Select";
import Header from "../../molecules/Header";
import { Shelf } from "./shelf";
import { Footer } from "../../molecules/Footer";
import { useNavigate } from "react-router-dom";
import api from "../../../api/api";

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
          <Typography type="h3">Profissionais</Typography>
        </ContainerChildren>
        <ContainerChildren left="2em" gap="2em">
          <Input iconLeft={<IconGlass />} placeholder="Buscar..." width={300} />
          <Select placeholder="Cargos" value={[]} />
          <Select placeholder="Função" value={[]} />
          <Button
            typographyProps={{ fontWeight: "light", type: "p2" }}
            style={{
              marginLeft: "73%",
              position: "absolute",
              borderRadius: "25px",
              color: "#ffffff",
            }}
            bgColor="#1ECB4F"
            bWidth="20px"
            bStyle="solid"
            onClick={()=> {}}
          >
            Cadastrar Novo
          </Button>
        </ContainerChildren>
        <ContainerChildren>
          <div className="table">
            <Header />
            {object.map((data) => (
              <Shelf data={data} />
            ))}
          </div>
        </ContainerChildren>
        <Footer />
      </ContainerMain>
    </>
  );
};

export default ProfessionalsMain;
