import { Input, Select, Radio, Typography } from "@stardust-ds/react";
import ButtonTemplate from "../../../atoms/ButtonTemplate";
import AttachmentProject from "../../../molecules/AttachmentProject";
import { BorderBottom, ContainerRow, ContainerColumn } from "../style";

const RegisterInputs = () => {
  return (
    <>
      <ContainerRow gap="1em">
        <Input width={600} type="text" label="Nome do Profissional" />
        <Input width={300} type="date" label="Data de Nascimento" />
      </ContainerRow>
      <ContainerRow gap="1em">
        <Input
          width={300}
          type="number"
          label="CPF"
          placeholder="000.000.000-00"
        />
        <Input width={285} type="number" label="RG" placeholder="000000000" />
        <Input
          width={300}
          type="number"
          label="Telefone"
          placeholder="(00) 00000-0000"
        />
      </ContainerRow>
      <ContainerRow gap="1em">
        <Input
          width={300}
          type="number"
          label="CNPJ"
          placeholder="00.000.00/0000.00"
        />
        <Input width={600} label="Razão Social" />
      </ContainerRow>
      <ContainerRow gap="1em">
        <Input label="CEP" placeholder="00000-0000" type="number" width={140} />
        <Input label="Rua" type="text" width={300} />
        <Input label="Número" type="number" width={130} />
        <Input label="Complemento" type="text" width={300} />
      </ContainerRow>
      <ContainerRow gap="1em">
        <Input label="Bairro" width={300} />
        <Input label="Cidade" width={300} />
        <Select
          placeholder="Selecione"
          options={[]}
          label="Estados"
          width="21.5em"
        />
      </ContainerRow>
      <BorderBottom />
      <ContainerRow>
        <div className="google">
          <h3>Dados de Login</h3>
          <Input
            type={"email"}
            label="Email do G suit"
            placeholder="nome.pessoa@ubistart.com"
          />
        </div>
      </ContainerRow>
      <BorderBottom />
      <ContainerRow>
        <h3>Contrato de Trabalho</h3>
      </ContainerRow>
      <ContainerRow gap="2em">
        <Input type="date" label="Data de inicio" />
        <div className="container_select">
          <Select options={[]} placeholder="Selecione" label="Tipo" />
        </div>
        <Input label="Horas/semana" width={140} />
        <Input label="Horas/mês" width={140} />
      </ContainerRow>
      <ContainerRow gap="2em">
        <div className="container_select">
          <Select options={[]} placeholder="Selecione" label="Cargo" />
        </div>
        <div className="container_select">
          <Select options={[]} placeholder="Selecione" label="Função" />
        </div>
        <Input placeholder="R$ 00,00" label="Pagamento Fixo" />
      </ContainerRow>
      <ContainerRow>
        <div style={{ width: "27em" }}>
          <Select label="Status" options={[]} />
        </div>
      </ContainerRow>
      <BorderBottom />
      <ContainerRow>
        <h3>Horas Extras</h3>
      </ContainerRow>
      <ContainerRow gap="3em">
        <div className="row">
          <Radio id="1" value={"1"} onChange={() => {}} checked />
          <Typography type="h6">Permitir Horas Extras</Typography>
        </div>
        <div className="row">
          <Radio id="2" value={"2"} onChange={() => {}} />
          <Typography type="h6">Não Permitir Horas Extras</Typography>
        </div>
      </ContainerRow>
      <ContainerRow gap="1em">
        <Input width={300} placeholder={"Horas"} label="Variável 1 (Divisor)" />
        <Input
          width={300}
          iconLeft="R$"
          type="number"
          label="Variável 2 (Valor Fixo)"
        />
        <Input
          label="Valor da Hora Extra"
          iconLeft={"R$"}
          value="15,50"
          bColor="white"
        />
      </ContainerRow>
      <ContainerRow>
        <h3>Limitar Horas Extras?</h3>
      </ContainerRow>
      <ContainerRow gap="3em">
        <div className="row">
          <Radio id="1" value={"1"} onChange={() => {}} checked />
          <Typography type="h6">Permitir Horas Extras</Typography>
        </div>
        <div className="row">
          <Radio id="2" value={"2"} onChange={() => {}} />
          <Typography type="h6">Não Permitir Horas Extras</Typography>
        </div>
      </ContainerRow>
      <ContainerRow>
        <Input label="Limite de Horas" placeholder="Horas"/>
      </ContainerRow>
      <BorderBottom/>
      <ContainerRow>
        <h3>Vincular Projetos</h3>
      </ContainerRow>
      <AttachmentProject/>
   
    </>
  );
};

export default RegisterInputs;
