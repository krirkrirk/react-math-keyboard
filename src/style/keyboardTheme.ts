import { KeyboardTheme } from "./keyboardTheme.d";

const black = "#020617";
export type KeyboardThemeColor =
  | "grey"
  | "blue"
  | "purple"
  | "orange"
  | "green"
  | "pink";

export const colors: KeyboardTheme = {
  grey: {
    // extraExtraLight: "#F8FAFC",
    extraLight: "#e2e8f0",
    light: "#CBD5E1",
    main: "#94A3B8",
    dark: "#64748B",
  },
  blue: {
    // extraExtraLight: "#FFF",
    extraLight: "#B7CBFF",
    light: "#769DFF",
    main: "#376FDE",
    dark: "#0045AB",
  },
  purple: {
    // extraExtraLight: "#F0EBFB",
    extraLight: "#DBCCF9",
    light: "#BA86FF",
    main: "#8657DE",
    dark: "#522AAB",
  },
  pink: {
    // extraExtraLight: "#FFE9EF",
    extraLight: "#FDC8D6",
    light: "#FF7390",
    main: "#D83F63",
    dark: "#A10039",
  },
  orange: {
    // extraExtraLight: "#fff4e1",
    extraLight: "#FFDEA2",
    light: "#FFBE46",
    main: "#F78D04",
    dark: "#BE5F00",
  },
  green: {
    // extraExtraLight: "#D6F1F3",
    extraLight: "#AAE1E5",
    light: "#54B1B7",
    main: "#168187",
    dark: "#00545A",
  },
};
