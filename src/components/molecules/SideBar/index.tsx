import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ButtonWithHover from "../../atoms/Button";
import { IconCompanies } from "../../atoms/Icons/IconCompanies";
import { IconDark } from "../../atoms/Icons/IconDark";
import { IconHome } from "../../atoms/Icons/IconHome";
import { IconHours } from "../../atoms/Icons/IconHours";
import IconLogout from "../../atoms/Icons/IconLogout";
import { IconNotes } from "../../atoms/Icons/IconNotes";
import { IconProfissional } from "../../atoms/Icons/IconProfissional";
import { IconProjects } from "../../atoms/Icons/IconProjects";
import { IconReports } from "../../atoms/Icons/IconReports";
import { IconServices } from "../../atoms/Icons/IconServices";
import { IconSetting } from "../../atoms/Icons/IconSetting";
import { IconUbistart } from "../../atoms/Icons/IconUbistart";
import { alterObject, DEFAULTSELECT } from "../../utils/btnSelects";

import { ContainerColumn, ContainerMain, ContainerRow } from "./style";

export const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selects, setSelects] = useState(DEFAULTSELECT);

  function handleSelect(btnSelect: string) {
    setSelects(alterObject(selects,btnSelect))
   
  }

  return (
    <div>
      <ContainerMain>
        <ContainerRow paddingRight="4em">
          <IconUbistart />
        </ContainerRow>
        <ContainerColumn height="65%" bottom="1em" left="0">
          <ButtonWithHover
            Text="Início"
            Icon={<IconHome />}
            color="#0066ff"
            fill="#0066ff"
            bgActive="#0066ff"
            colorActive="white"
            fillActive="white"
            onClick={() => {
              navigate('/')
              handleSelect('home')
            }}
            isActive={selects.home}
          />
          <ButtonWithHover
            Text="Profissionais"
            Icon={<IconProfissional />}
            color="#0066ff"
            fill="#0066ff"
            bgActive="#0066ff"
            colorActive="white"
            fillActive="white"
            onClick={() => {
              navigate('/Professionals')
              handleSelect('professionals')
            }}
            isActive={selects.professionals}
          />

          <ButtonWithHover
            Text="Projetos"
            Icon={<IconProjects />}
            color="#0066ff"
            fill="#0066ff"
            bgActive="#0066ff"
            colorActive="white"
            fillActive="white"
            onClick={() => {
              navigate('/Projects')
              handleSelect('projects')
            }}
            isActive={selects.projects}
          />
          <ButtonWithHover
            Text="Horas Extras"
            Icon={<IconHours />}
            color="#0066ff"
            fill="#0066ff"
            bgActive="#0066ff"
            colorActive="white"
            fillActive="white"
            onClick={() => {
              navigate('/ExtrasHours')
              handleSelect('extraHours')
            }}
            isActive={selects.extraHours}
          />
          <ButtonWithHover
            Text="Notas Fiscais"
            Icon={<IconNotes />}
            color="#0066ff"
            fill="#0066ff"
            bgActive="#0066ff"
            colorActive="white"
            fillActive="white"
            onClick={() => {
              navigate('/Notes')
              handleSelect('notes')
            }}
            isActive={selects.notes}
          />
          <ButtonWithHover
            Text="Relatórios"
            Icon={<IconReports />}
            color="#0066ff"
            fill="#0066ff"
            bgActive="#0066ff"
            colorActive="white"
            fillActive="white"
            onClick={() => {
              navigate('/Reports')
              handleSelect('reports')
            }}
            isActive={selects.reports}
          />
          <ButtonWithHover
            Text="Ordem de Serviço"
            Icon={<IconServices />}
            color="#0066ff"
            fill="#0066ff"
            bgActive="#0066ff"
            colorActive="white"
            fillActive="white"
            onClick={() => {
              navigate('/Services')
              handleSelect('services')
            }}
            isActive={selects.services}
          />
          <ButtonWithHover
            Text="Configurações"
            Icon={<IconSetting />}
            color="#0066ff"
            fill="#0066ff"
            bgActive="#0066ff"
            colorActive="white"
            fillActive="white"
            onClick={() => {
              navigate('/Settings')
              handleSelect('settings')
            }}
            isActive={selects.settings}
          />
          <ButtonWithHover
            Text="Empresas"
            Icon={<IconCompanies />}
            color="#0066ff"
            fill="#0066ff"
            bgActive="#0066ff"
            colorActive="white"
            fillActive="white"
            onClick={() => {
              navigate('/Company')
              handleSelect('company')
            }}
            isActive={selects.company}
          />
        </ContainerColumn>
        <ContainerColumn height="20%" top="2em" left="0">
          <ButtonWithHover
            Text="Apagar as Luzes"
            Icon={<IconDark />}
            color="#00AAFF"
            fill="#00AAFF"
            value="9"
            bgActive=""
            colorActive=""
            fillActive=""
            isActive={false}
          />
          <ButtonWithHover
            Text="Sair"
            Icon={<IconLogout />}
            color="red"
            fill="red"
            value="10"
            bgActive=""
            colorActive=""
            fillActive=""
            isActive={false}
          />
        </ContainerColumn>
      </ContainerMain>
    </div>
  );
};
