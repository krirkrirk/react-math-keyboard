export type KeyGroupIds =
  | "sets"
  | "proba"
  | "functions"
  | "trigo"
  | "sequences"
  | "complex"
  | "minLetters"
  | "majLetters"
  | "greek"
  | "utility"
  | "sequences"
  | "alphabet"
  | "basicOperations"
  | "otherOperations"
  | "numbers"
  | "algebra"
  | "geometry"
  | "words"
  | "units"
  | "atoms"
  | "molecules";

export type KeyGroup = {
  id: KeyGroupIds;
  label: string;
};

export const keyGroups: KeyGroup[] = [
  { id: "algebra", label: "Algèbre" },
  { id: "otherOperations", label: "Opérations" },

  { id: "sets", label: "Ensembles" },
  { id: "trigo", label: "Trigo" },

  { id: "functions", label: "Fonctions" },
  { id: "proba", label: "Probas" },

  { id: "minLetters", label: "Lettres minuscules" },
  { id: "majLetters", label: "Lettres majuscules" },

  { id: "greek", label: "Grec" },

  { id: "geometry", label: "Géométrie" },
  { id: "units", label: "Unités" },

  { id: "sequences", label: "Suites" },
  { id: "complex", label: "Complexes" },
  { id: "words", label: "Mots" },

  { id: "basicOperations", label: "Opérations basiques" },
  { id: "numbers", label: "Nombres" },

  { id: "atoms", label: "Atomes" },
  { id: "molecules", label: "Molécules" },

  { id: "alphabet", label: "Alphabet" },
];
