import { useSetRecoilState } from "recoil";
import { useEffect } from "react";
import { themeState } from "../../store/Theme/atoms";

export default function ThemeInitializer() {
  const setTheme = useSetRecoilState(themeState);

  useEffect(() => {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    setTheme((prev) => (prev.active ? prev : { active: systemTheme }));
    document.documentElement.setAttribute("theme", systemTheme);
  }, []);

  return null;
}
