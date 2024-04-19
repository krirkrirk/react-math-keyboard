type Theme = {
  extraLight: string;
  light: string;
  main: string;
  dark: string;
};

export type KeyboardThemeColor =
  | "grey"
  | "blue"
  | "purple"
  | "orange"
  | "green"
  | "pink";

export type KeyboardTheme = {
  grey: Theme;
  blue: Theme;
  purple: Theme;
  orange: Theme;
  green: Theme;
  pink: Theme;
};
