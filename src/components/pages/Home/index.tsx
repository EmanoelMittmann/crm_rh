import { Navbar } from "../../molecules/NavBar";
import { Sidebar } from "../../molecules/SideBar";
import { Master } from "./style";

type Props = {
  children?: JSX.Element;
};

const MasterPage = ({ children }: Props) => {
  return (
    <Master>
      <Sidebar />
      <Navbar />
      <div>{children}</div>
    </Master>
  );
};

export default MasterPage;
