import React from "react";

import "./header.css";
import { CollectionsBookmark, Home, PostAddOutlined } from "@mui/icons-material";

import { useRecoilValue, useSetRecoilState } from "recoil";
import { Link, useLocation } from "react-router-dom";
import { themeState } from "../../store/Theme/atoms";

export default function Header() {
  const setTheme = useSetRecoilState(themeState);
  const theme = useRecoilValue(themeState);
  const location = useLocation();
  const currentPath = location.pathname;

  React.useEffect(() => {
    document.documentElement.setAttribute("theme", theme.active);
  }, [theme]);
  const handleTheme = () => {
    setTheme((prev) => ({ active: prev.active === "dark" ? "light" : "dark" }));
  };

  return (
    <header className="header">
      <div className="header__header">
        <h1 className="header__title"> Flash Cards</h1>
        <button
          onClick={() => {
            handleTheme();
          }}
          aria-label="Toggle Theme"
          title="Toggle Theme"
        >
          <div id="circle" className={theme.active}></div>
        </button>
      </div>

      <nav className="navigation">
        <ul className="navigation__list">
          <li className={`navigation__item ${currentPath === "/" ? "selected" : ""}`}>
            <Link to={"/"} title="Home" aria-label="Home link">
              <Home style={{ fontSize: "2rem" }} />
            </Link>
          </li>
          <li className={`navigation__item ${currentPath === "/cards/add" ? "selected" : ""}`}>
            <Link to={"/cards/add"} title="AddCard" aria-label="Add Card link">
              <PostAddOutlined style={{ fontSize: "2rem" }} />
            </Link>
          </li>
          <li className={`navigation__item ${currentPath === "/collections/" ? "selected" : ""}`}>
            <Link to={"/collections/"} title="Collections" aria-label="Collections link">
              <CollectionsBookmark style={{ fontSize: "2rem" }} />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
