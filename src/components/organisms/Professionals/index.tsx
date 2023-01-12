import { ContainerChildren, ContainerMain, Table } from "./style";
import { Input, Typography, Button} from "@stardust-ds/react";
import { IconGlass } from "../../atoms/Icons/IconGlass";
import { Select } from "../../atoms/Select";
import Header from "../../molecules/Header";
import { Shelf } from "./shelf";
import { Footer } from "../../molecules/Footer";
import { useNavigate } from "react-router-dom";

const object = [{}];

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
            <Button style={{ borderRadius: "500px", width:'17em', justifyContent:'center'}} bgColor="#1ECB4F" onClick={() => navigate('/RegisterProfessionals')}>
              Cadastrar Novo
            </Button>
          </ContainerChildren>
          <ContainerChildren height="27.3em" width="95em">
            <Table>
              <Header />
              {object?.map((data) => (
                <Shelf data={data} />
              ))}
            </Table>
          </ContainerChildren>
          <Footer />
        </div>
      </ContainerMain>
    </>
  );
};

export default ProfessionalsMain;
