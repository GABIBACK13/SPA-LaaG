import { useLocation } from "react-router-dom";
import "./navigation.css";
import NavItem from "./navigationItem";
import { AccountCircle, HomeRounded, Style } from "@mui/icons-material";

export function Navigation() {
  const currentPath = useLocation().pathname;

  return (
    <nav className="navigation">
      <NavItem path="/" title="Home" Icon={<HomeRounded />} content="Home" currentPath={currentPath} />

      <NavItem path="/profile" title="Profile" Icon={<AccountCircle />} content="Profile" currentPath={currentPath} />

      <NavItem
        path="/flashCards"
        title="Flash Cards"
        Icon={<Style />}
        content="Flash Cards"
        currentPath={currentPath}
      />
    </nav>
  );
}
