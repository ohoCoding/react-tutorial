import { tabData } from "../../constants/tab";
import CustomNavLink from "../NavLink/index";

const Tabs = () => {
  return (
    <div className="tabs">
      {tabData.map((tab, index) => (
        <CustomNavLink key={index} to={tab.to} label={tab.label} />
      ))}
    </div>
  );
};

export default Tabs;
