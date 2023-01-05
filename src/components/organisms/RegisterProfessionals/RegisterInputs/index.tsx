import { Input } from "@stardust-ds/react";
import React from "react";
import { Select } from "../../../atoms/Select";
import { BorderBottom, ContainerRow } from "../style";

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
          value={[]}
          label="Estados"
          width="21.5em"
        />
      </ContainerRow>
      <BorderBottom />
    </>
  );
};

export default RegisterInputs;
