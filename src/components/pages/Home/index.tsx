import React from "react";
import ButtonWithHover from "../../atoms/Button";
import { IconCompanies } from "../../atoms/Icons/IconCompanies";
import { IconDark } from "../../atoms/Icons/IconDark";
import { IconHome } from "../../atoms/Icons/IconHome";
import { IconHours } from "../../atoms/Icons/IconHours";
import { IconLight } from "../../atoms/Icons/IconLight";
import { IconNotes } from "../../atoms/Icons/IconNotes";
import { IconProfissional } from "../../atoms/Icons/IconProfissional";
import { IconProjects } from "../../atoms/Icons/IconProjects";
import { IconReports } from "../../atoms/Icons/IconReports";
import { IconServices } from "../../atoms/Icons/IconServices";
import { IconSetting } from "../../atoms/Icons/IconSetting";
import InputToView from "../../atoms/InputPassword";
import InputUser from "../../atoms/InputUser";

const Home = () => {
  return (
    <div>
      <ButtonWithHover Text="Início" Icon={<IconHome/>} />
      <ButtonWithHover Text="Empresas" Icon={<IconCompanies />} />
      <ButtonWithHover Text="Horas Extras" Icon={<IconHours />} />
      <ButtonWithHover Text="Apagar as Luzes" Icon={<IconDark />} />
      <ButtonWithHover Text="Profissional" Icon={<IconProfissional />} />
      <ButtonWithHover Text="Fiscal Nota" Icon={<IconNotes />} />
      <ButtonWithHover Text="Projeto" Icon={<IconProjects />} />
      <ButtonWithHover Text="Relatorios" Icon={<IconReports />} />
      <ButtonWithHover Text="Ordem de Serviços" Icon={<IconServices />} />
      <ButtonWithHover Text="Configurações" Icon={<IconSetting />} />
    </div>
  );
};

export default Home;
