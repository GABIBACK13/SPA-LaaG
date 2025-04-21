import { atom } from "recoil";
import * as keys from "../keys";
import { AtomTheme } from "../../models/interfaces/recoil/themeState.atom";
import { toast } from "react-toastify";

const initialValue: AtomTheme = {
  active: "dark",
};

const loadState = (key: string, defaultValue: AtomTheme) => {
  try {
    const saved = localStorage.getItem(key);
    console.log(saved);
    return saved ? JSON.parse(saved) : defaultValue;
  } catch (error) {
    toast.error("Failed to load theme state");
    console.error("Failed to load theme state:", error);
    return defaultValue;
  }
};

const setState = (newValue: AtomTheme) => {
  localStorage.setItem(keys.THEME_KEY, JSON.stringify(newValue));
};

export const themeState = atom<AtomTheme>({
  key: keys.THEME_KEY,
  default: loadState(keys.THEME_KEY, initialValue),
  effects_UNSTABLE: [
    ({ setSelf, onSet }) => {
      onSet((newValue: AtomTheme) => setState(newValue));
    },
  ],
});
