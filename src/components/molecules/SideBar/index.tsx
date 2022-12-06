import React from "react";
import ButtonWithHover from "../../atoms/Button";
import { IconCompanies } from "../../atoms/Icons/IconCompanies";
import { IconDark } from "../../atoms/Icons/IconDark";
import { IconHome } from "../../atoms/Icons/IconHome";
import { IconHours } from "../../atoms/Icons/IconHours";
import IconLogout from "../../atoms/Icons/IconLogout";
import { IconNotes } from "../../atoms/Icons/IconNotes";
import { IconProjects } from "../../atoms/Icons/IconProjects";
import { IconReports } from "../../atoms/Icons/IconReports";
import { IconServices } from "../../atoms/Icons/IconServices";
import { IconSetting } from "../../atoms/Icons/IconSetting";
import { IconUbistart } from "../../atoms/Icons/IconUbistart";
import { ContainerColumn, ContainerMain, ContainerRow } from "./style";

export const Sidebar = () => {
  return (
    <div>
      <ContainerMain>
        <ContainerRow paddingRight="4em">
            <IconUbistart />
        </ContainerRow>
        <ContainerColumn height="65%" bottom="1em" left="0">
          <ButtonWithHover Text="Início" Icon={<IconHome />} color='#0066ff' fill="#0066ff" bgActive="#0066ff" colorActive="white" fillActive="white"/>
          <ButtonWithHover Text="Projetos" Icon={<IconProjects />}  color='#0066ff' fill="#0066ff" bgActive="#0066ff" colorActive="white" fillActive="white" />
          <ButtonWithHover Text="Horas Extras" Icon={<IconHours />}  color='#0066ff' fill="#0066ff"bgActive="#0066ff" colorActive="white" fillActive="white" />
          <ButtonWithHover Text="Notas Fiscais" Icon={<IconNotes />}  color='#0066ff' fill="#0066ff" bgActive="#0066ff" colorActive="white" fillActive="white"/>
          <ButtonWithHover Text="Relatórios" Icon={<IconReports />}  color='#0066ff' fill="#0066ff" bgActive="#0066ff" colorActive="white" fillActive="white"/>
          <ButtonWithHover Text="Ordem de Serviço" Icon={<IconServices />}  color='#0066ff' fill="#0066ff" bgActive="#0066ff" colorActive="white" fillActive="white"/>
          <ButtonWithHover Text="Configurações" Icon={<IconSetting />}  color='#0066ff' fill="#0066ff" bgActive="#0066ff" colorActive="white" fillActive="white" />
          <ButtonWithHover Text="Empresas" Icon={<IconCompanies />}  color='#0066ff' fill="#0066ff" bgActive="#0066ff" colorActive="white" fillActive="white" />
        </ContainerColumn>
        <ContainerColumn height="20%" top="2em" left="0">
          <ButtonWithHover Text="Apagar as Luzes" Icon={<IconDark />}  color='#00AAFF' fill="#00AAFF" bgActive="" colorActive="" fillActive=""/>
          <ButtonWithHover Text="Sair" Icon={<IconLogout />}  color='red' fill="red" bgActive="" colorActive="" fillActive=""/>
        </ContainerColumn>
      </ContainerMain>
    </div>
  );
};
