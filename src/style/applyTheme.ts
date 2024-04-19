import { KeyboardTheme, KeyboardThemeColor } from "./keyboardTheme.d";
import { colors } from "./keyboardTheme";

export const applyTheme = (color: KeyboardThemeColor) => {
  document.documentElement.style.setProperty(
    "--keyboard-color-main",
    colors[color]["main"]
  );
  document.documentElement.style.setProperty(
    "--keyboard-color-light",
    colors[color]["light"]
  );
  document.documentElement.style.setProperty(
    "--keyboard-color-extraLight",
    colors[color]["extraLight"]
  );
  document.documentElement.style.setProperty(
    "--keyboard-color-dark",
    colors[color]["dark"]
  );
};
