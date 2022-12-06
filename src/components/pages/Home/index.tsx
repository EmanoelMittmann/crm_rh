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

const Home = () => {
  return (
    <Master>
      <Sidebar />
      <Navbar />
      <div>{children}</div>
    </Master>
  );
};

export default MasterPage;
