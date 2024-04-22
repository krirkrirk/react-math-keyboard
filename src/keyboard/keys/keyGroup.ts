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
  | "molecules"
  | "physicalQuantities";

export type Langs = "en" | "fr";

export type KeyGroup = {
  id: KeyGroupIds;
  label: { [x in Langs]: string };
};

export const keyGroups: KeyGroup[] = [
  { id: "algebra", label: { fr: "Algèbre", en: "Algebra" } },
  { id: "otherOperations", label: { fr: "Opérations", en: "Operations" } },

  { id: "sets", label: { fr: "Ensembles", en: "Sets" } },
  { id: "trigo", label: { fr: "Trigo", en: "Trigonometry" } },

  { id: "functions", label: { fr: "Fonctions", en: "Functions" } },
  { id: "proba", label: { fr: "Probas", en: "Probability" } },

  {
    id: "minLetters",
    label: { fr: "Lettres minuscules", en: "Lowercase letters" },
  },
  {
    id: "majLetters",
    label: { fr: "Lettres majuscules", en: "Uppercase letters" },
  },
  { id: "greek", label: { fr: "Grec", en: "Greek" } },

  { id: "geometry", label: { fr: "Géométrie", en: "Geometry" } },
  { id: "units", label: { fr: "Unités", en: "Units" } },
  { id: "physicalQuantities", label: { fr: "Grandeurs", en: "Quantities" } },

  { id: "sequences", label: { fr: "Suites", en: "Sequences" } },
  { id: "complex", label: { fr: "Complexes", en: "Complex" } },
  { id: "words", label: { fr: "Mots", en: "Words" } },

  {
    id: "basicOperations",
    label: { fr: "Opérations basiques", en: "Basic operations" },
  },
  { id: "numbers", label: { fr: "Nombres", en: "Numbers" } },

  { id: "atoms", label: { fr: "Atomes", en: "Atoms" } },
  { id: "molecules", label: { fr: "Molécules", en: "Molecules" } },

  { id: "alphabet", label: { fr: "Alphabet", en: "Alphabet" } },
];
