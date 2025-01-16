import { NavLink } from "react-router-dom";

interface CustomNavLinkProps {
  to: string; // 이동할 경로
  label: string; // 탭 이름
}

const CustomNavLink = ({ to, label }: CustomNavLinkProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? "active-tab" : "inactive-tab")}
    >
      {label}
    </NavLink>
  );
};

export default CustomNavLink;
