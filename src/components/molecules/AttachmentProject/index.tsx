import { Input, Select } from "@stardust-ds/react";
import React from "react";
import { ButtonGeneric } from "../../atoms/ButtonGeneric";
import { Column, ContainerRow, Header, Table } from "./style";

const AttachmentProject = () => {
  return (
    <>
      <ContainerRow left="1.5em">
        <div className="container_select">
          <Select
            options={[]}
            label="Projeto"
            placeholder="Selecione"
            width={300}
          />
        </div>
        <Input label="Horas/mês" placeholder="Horas" width={250} />
        <ButtonGeneric
          top="1em"
          Text="Vincular"
          bgColor="#0D2551"
          color="white"
          width="10em"
          bRadius="500px"
          height="3.5em"
        />
      </ContainerRow>
      <ContainerRow>
        <Table>
            <Header>
                <Column left="1em" width="40%">
                    Projeto
                </Column>
                <Column width="20%">
                    Início do Projeto
                </Column>
                <Column width="20%">
                    Horas Mensais
                </Column>
                <Column width="5%">
                    %
                </Column>
            </Header>
        </Table>
      </ContainerRow>
    </>
  );
};

export default AttachmentProject;
