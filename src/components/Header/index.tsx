import React from "react";

import "./header.css";

import { useRecoilValue, useSetRecoilState } from "recoil";
import { themeState } from "../../store/Theme/atoms";

export default function Header() {
  const setTheme = useSetRecoilState(themeState);
  const theme = useRecoilValue(themeState);

  React.useEffect(() => {
    document.documentElement.setAttribute("theme", theme.active);
  }, [theme]);
  const handleTheme = () => {
    setTheme((prev) => ({ active: prev.active === "dark" ? "light" : "dark" }));
  };

  return (
    <header className="header">
      <div className="header__header">
        <h1 className="header__title" translate="no">
          {" "}
          LaaG
        </h1>
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
    </header>
  );
}
