import { textifyInLatex } from "../../utils/textifyInLatex";
import { KeyProps } from "./key";
import { KeyId } from "./keyIds";

const moleculesData: { id: KeyId; formula: string }[] = [
  {
    formula: "H_2",
    id: "Mol-H2",
  },
  {
    formula: "O_2",
    id: "Mol-O2",
  },
  {
    formula: "H_2O",
    id: "Mol-H2O",
  },
  {
    formula: "CH_4",
    id: "Mol-CH4",
  },
  {
    formula: "CO_2",
    id: "Mol-CO2",
  },
  {
    formula: "NH_3",
    id: "Mol-NH3",
  },
  {
    formula: "SO_2",
    id: "Mol-SO2",
  },
  {
    formula: "C_2H_5OH",
    id: "Mol-C2H5OH",
  },
  {
    formula: "C_6H_{12}O_6",
    id: "Mol-C6H12O6",
  },
  {
    formula: "CH_3OH",
    id: "Mol-CH3OH",
  },
  {
    formula: "C_3H_8",
    id: "Mol-C3H8",
  },
  {
    formula: "C_4H_{10}",
    id: "Mol-C4H10",
  },
  {
    formula: "H_2SO_4",
    id: "Mol-H2SO4",
  },
  {
    formula: "C_3H_6",
    id: "Mol-C3H6",
  },
  {
    formula: "C_6H_6",
    id: "Mol-C6H6",
  },
  {
    formula: "CH_3CN",
    id: "Mol-CH3CN",
  },
  {
    formula: "CH_2O",
    id: "Mol-CH2O",
  },
  {
    formula: "HCOONa",
    id: "Mol-HCOONa",
  },
  {
    formula: "CaCO_3",
    id: "Mol-CaCO3",
  },
  {
    formula: "(NH_4)_2SO_4",
    id: "Mol-NH42SO4",
  },
  {
    formula: "NH_4NO_3",
    id: "Mol-NH4NO3",
  },
  {
    formula: "Na_2CO_3",
    id: "Mol-Na2CO3",
  },
  {
    formula: "C_6H_8O_6",
    id: "Mol-C6H8O6",
  },
  {
    formula: "C_9H_8O_4",
    id: "Mol-C9H8O4",
  },
  {
    formula: "C_8H_{10}N_4O_2",
    id: "Mol-C8H10N4O2",
  },
  {
    formula: "C_8H_9NO_2",
    id: "Mol-C8H9NO2",
  },
  {
    formula: "NaCl",
    id: "Mol-NaCl",
  },
  {
    formula: "CH_3COOH",
    id: "Mol-CH3COOH",
  },
  {
    formula: "Mg",
    id: "Mol-Mg",
  },
  {
    formula: "MgO",
    id: "Mol-MgO",
  },
  {
    formula: "Fe",
    id: "Mol-Fe",
  },
  {
    formula: "Fe_2O_3",
    id: "Mol-Fe2O3",
  },
  {
    formula: "C_2H_6",
    id: "Mol-C2H6",
  },
  {
    formula: "C_2H_4",
    id: "Mol-C2H4",
  },
  {
    formula: "C_3H_6O",
    id: "Mol-C3H6O",
  },
  {
    formula: "C_7H_8",
    id: "Mol-C7H8",
  },
  {
    formula: "C_2H_6O_2",
    id: "Mol-C2H6O2",
  },
  {
    formula: "C_4H_8",
    id: "Mol-C4H8",
  },
  {
    formula: "C_5H_{10}",
    id: "Mol-C5H10",
  },
  {
    formula: "C_6H_{12}",
    id: "Mol-C6H12",
  },
  {
    formula: "C_4H_8O_2",
    id: "Mol-C4H8O2",
  },
  {
    formula: "C_3H_6O_2",
    id: "Mol-C3H6O2",
  },
  {
    formula: "C_6H_{12}O_2",
    id: "Mol-C6H12O2",
  },
  {
    formula: "C_6H_6O",
    id: "Mol-C6H6O",
  },
  {
    formula: "C_2H_4O",
    id: "Mol-C2H4O",
  },
  {
    formula: "C_4H_8O",
    id: "Mol-C4H8O",
  },
  {
    formula: "C_5H_4O_2",
    id: "Mol-C5H4O2",
  },
  {
    formula: "CH_2O_2",
    id: "Mol-CH2O2",
  },
  {
    formula: "C_{12}H_{22}O_{11}",
    id: "Mol-C12H22O11",
  },
  {
    formula: "HCl",
    id: "Mol-HCl",
  },
  {
    formula: "NaOH",
    id: "Mol-NaOH",
  },
  {
    formula: "AgNO_3",
    id: "Mol-AgNO3",
  },
  {
    formula: "AgCl",
    id: "Mol-AgCl",
  },
  {
    formula: "NaNO_3",
    id: "Mol-NaNO3",
  },
  {
    formula: "Ca(OH)_2",
    id: "Mol-CaOH2",
  },
  {
    formula: "CaSO_4",
    id: "Mol-CaSO4",
  },
  {
    formula: "CuSO_4",
    id: "Mol-CuSO4",
  },
  {
    formula: "Cu(OH)_2",
    id: "Mol-CuOH2",
  },
  {
    formula: "Na_2SO_4",
    id: "Mol-Na2SO4",
  },
  {
    formula: "Zn",
    id: "Mol-Zn",
  },
  {
    formula: "ZnCl_2",
    id: "Mol-ZnCl2",
  },
  {
    formula: "KOH",
    id: "Mol-KOH",
  },
  {
    formula: "K_2SO_4",
    id: "Mol-K2SO4",
  },
  {
    formula: "H_2O_2",
    id: "Mol-H2O2",
  },
  {
    formula: "PbCl_2",
    id: "Mol-PbCl2",
  },
  {
    formula: "KI",
    id: "Mol-KI",
  },
  {
    formula: "PbI_2",
    id: "Mol-PbI2",
  },
  {
    formula: "KCl",
    id: "Mol-KCl",
  },
  {
    formula: "CH_3COONa",
    id: "Mol-CH3COONa",
  },
  {
    formula: "S",
    id: "Mol-S",
  },
  {
    formula: "Ba(NO_3)_2",
    id: "Mol-BaNO32",
  },
  {
    formula: "BaSO_4",
    id: "Mol-BaSO4",
  },
  {
    formula: "Cu",
    id: "Mol-Cu",
  },
  {
    formula: "Cu(NO_3)_2",
    id: "Mol-CuNO32",
  },
  {
    formula: "Ag",
    id: "Mol-Ag",
  },
  {
    formula: "Ca_3(PO_4)_2",
    id: "Mol-Ca3PO42",
  },
  {
    formula: "KNO_3",
    id: "Mol-KNO3",
  },
  {
    formula: "N_2",
    id: "Mol-N2",
  },
  {
    formula: "Pb(NO_3)_2",
    id: "Mol-PbNO32",
  },
  {
    formula: "PbSO_4",
    id: "Mol-PbSO4",
  },
  {
    formula: "CaO",
    id: "Mol-CaO",
  },
  {
    formula: "CuCl_2",
    id: "Mol-CuCl2",
  },
  {
    formula: "FeCl_2",
    id: "Mol-FeCl2",
  },
  {
    formula: "Cl_2",
    id: "Mol-Cl2",
  },
  {
    formula: "N_2O",
    id: "Mol-N2O",
  },
  {
    formula: "N_2O_4",
    id: "Mol-N2O4",
  },
  {
    formula: "NO_2",
    id: "Mol-NO2",
  },
  {
    formula: "KClO_3",
    id: "Mol-KClO3",
  },
  {
    formula: "ZnSO_4",
    id: "Mol-ZnSO4",
  },
  {
    formula: "H_3PO_4",
    id: "Mol-H3PO4",
  },
  {
    formula: "Na_2O",
    id: "Mol-Na2O",
  },
  {
    formula: "NO",
    id: "Mol-NO",
  },
  {
    formula: "CO",
    id: "Mol-CO",
  },
  {
    formula: "Fe_3O_4",
    id: "Mol-Fe3O4",
  },
  {
    formula: "Cu_2S",
    id: "Mol-Cu2S",
  },
  {
    formula: "Cu_2O",
    id: "Mol-Cu2O",
  },
  {
    formula: "H_3O^+",
    id: "Mol-H3O+",
  },
  {
    formula: "SO_4^{2-}",
    id: "Mol-SO42-",
  },
  {
    formula: "Fe^{2+}",
    id: "Mol-Fe2+",
  },
  {
    formula: "OH^-",
    id: "Mol-OH-",
  },
  {
    formula: "Ag^+",
    id: "Mol-Ag+",
  },
  {
    formula: "PO_4^{3-}",
    id: "Mol-PO43-",
  },
  {
    formula: "Ag_3PO_4",
    id: "Mol-Ag3PO4",
  },
  {
    formula: "Cu^{2+}",
    id: "Mol-Cu2+",
  },
  {
    formula: "Ca_3(PO_3)_2",
    id: "Mol-Ca3PO32",
  },
  {
    formula: "NH_4Cl",
    id: "Mol-NH4Cl",
  },
  {
    formula: "S_8",
    id: "Mol-S8",
  },
  {
    formula: "Mg(OH)_2",
    id: "Mol-MgOH2",
  },
  {
    formula: "MgCl_2",
    id: "Mol-MgCl2",
  },
];

// const moleculesData: { name: KeyId; formula: string }[] = [
//   { name: "Dihydrogène", formula: "H_2" },
//   { name: "Dioxygène", formula: "O_2" },
//   { name: "Eau", formula: "H_2O" },
//   { name: "Méthane", formula: "CH_4" },
//   { name: "Dioxyde de carbone", formula: "CO_2" },
//   { name: "Ammoniac", formula: "NH_3" },
//   { name: "Dioxyde de soufre", formula: "SO_2" },
//   { name: "Éthanol", formula: "C_2H_5OH" },
//   { name: "Glucose", formula: "C_6H_{12}O_6" },
//   { name: "Méthanol", formula: "CH_3OH" },
//   { name: "Propane", formula: "C_3H_8" },
//   { name: "Butane", formula: "C_4H_{10}" },
//   { name: "Acide sulfurique", formula: "H_2SO_4" },
//   { name: "Propylène", formula: "C_3H_6" },
//   { name: "Benzène", formula: "C_6H_6" },
//   { name: "Acetonitrile", formula: "CH_3CN" },
//   { name: "Méthanal", formula: "CH_2O" },
//   { name: "Méthanoate de sodium", formula: "HCOONa" },
//   { name: "Carbonate de calcium", formula: "CaCO_3" },
//   { name: "Sulfate d'ammonium", formula: "(NH_4)_2SO_4" },
//   { name: "Nitrate d'ammonium", formula: "NH_4NO_3" },
//   { name: "Carbonate de sodium", formula: "Na_2CO_3" },
//   { name: "Vitamine C", formula: "C_6H_8O_6" },
//   { name: "Aspirine", formula: "C_9H_8O_4" },
//   { name: "Caféine", formula: "C_8H_{10}N_4O_2" },
//   { name: "Paracétamol", formula: "C_8H_9NO_2" },
//   { name: "Chlorure de sodium", formula: "NaCl" },
//   { name: "Lactose", formula: "C_{12}H_{22}O_{11}" },
//   { name: "Acide acétique", formula: "CH_3COOH" },
//   { name: "Magnésium", formula: "Mg" },
//   { name: "Oxyde de magnésium", formula: "MgO" },
//   { name: "Fer", formula: "Fe" },
//   { name: "Oxyde de fer(III)", formula: "Fe_2O_3" },
//   { name: "Éthane", formula: "C_2H_6" },
//   { name: "Éthylène", formula: "C_2H_4" },
//   { name: "Acétone", formula: "C_3H_6O" },
//   { name: "Toluène", formula: "C_7H_8" },
//   { name: "Éthylène glycol", formula: "C_2H_6O_2" },
//   { name: "Butène", formula: "C_4H_8" },
//   { name: "Pentène", formula: "C_5H_{10}" },
//   { name: "Cyclohexane", formula: "C_6H_{12}" },
//   { name: "Acétate d'éthyle", formula: "C_4H_8O_2" },
//   { name: "Acétate de méthyle", formula: "C_3H_6O_2" },
//   { name: "Acétate de butyle", formula: "C_6H_{12}O_2" },
//   { name: "Phénol", formula: "C_6H_6O" },
//   { name: "Éthanal", formula: "C_2H_4O" },
//   { name: "Butyraldéhyde", formula: "C_4H_8O" },
//   { name: "Furfural", formula: "C_5H_4O_2" },
//   { name: "Acide formique", formula: "CH_2O_2" },
//   { name: "Sucrose", formula: "C_{12}H_{22}O_{11}" },
//   { name: "Acide chlorhydrique", formula: "HCl" },
//   { name: "Hydroxyde de sodium", formula: "NaOH" },
//   { name: "Nitrate d'argent", formula: "AgNO_3" },
//   { name: "Chlorure d'argent", formula: "AgCl" },
//   { name: "Nitrate de sodium", formula: "NaNO_3" },
//   { name: "Hydroxyde de calcium", formula: "Ca(OH)_2" },
//   { name: "Sulfate de calcium", formula: "CaSO_4" },
//   { name: "Sulfate de cuivre", formula: "CuSO_4" },
//   { name: "Hydroxyde de cuivre(II)", formula: "Cu(OH)_2" },
//   { name: "Sulfate de sodium", formula: "Na_2SO_4" },
//   { name: "Zinc", formula: "Zn" },
//   { name: "Chlorure de zinc", formula: "ZnCl_2" },
//   { name: "Hydroxyde de potassium", formula: "KOH" },
//   { name: "Sulfate de potassium", formula: "K_2SO_4" },
//   { name: "Peroxyde d'hydrogène", formula: "H_2O_2" },
//   { name: "Chlorure de plomb(II)", formula: "PbCl_2" },
//   { name: "Iodure de potassium", formula: "KI" },
//   { name: "Iodure de plomb(II)", formula: "PbI_2" },
//   { name: "Chlorure de potassium", formula: "KCl" },
//   { name: "Acétate de sodium", formula: "CH_3COONa" },
//   { name: "Soufre", formula: "S" },
//   { name: "Nitrate de baryum", formula: "Ba(NO_3)_2" },
//   { name: "Sulfate de baryum", formula: "BaSO_4" },
//   { name: "Cuivre", formula: "Cu" },
//   { name: "Nitrate de cuivre(II)", formula: "Cu(NO_3)_2" },
//   { name: "Argent", formula: "Ag" },
//   { name: "Phosphate de calcium", formula: "Ca_3(PO_4)_2" },
//   { name: "Soufre", formula: "S_8" },
//   { name: "Nitrate de potassium", formula: "KNO_3" },
//   { name: "Azote", formula: "N_2" },
//   { name: "Nitrate de plomb(II)", formula: "Pb(NO_3)_2" },
//   { name: "Sulfate de plomb(II)", formula: "PbSO_4" },
//   { name: "Oxyde de calcium", formula: "CaO" },
//   { name: "Chlorure de cuivre(II)", formula: "CuCl_2" },
//   { name: "Chlorure de fer(II)", formula: "FeCl_2" },
//   { name: "Dichlore", formula: "Cl_2" },
//   { name: "Protoxyde d'azote", formula: "N_2O" },
//   { name: "Peroxyde de dinitrogène", formula: "N_2O_4" },
//   { name: "Dioxyde d'azote", formula: "NO_2" },
//   { name: "Chlorate de potassium", formula: "KClO_3" },
//   { name: "Sulfate de zinc", formula: "ZnSO_4" },
//   { name: "Acide phosphorique", formula: "H_3PO_4" },
//   { name: "Oxyde de sodium", formula: "Na_2O" },
//   { name: "Monoxyde d'azote", formula: "NO" },
//   { name: "Monoxyde de carbone", formula: "CO" },
//   { name: "Oxyde de fer(III)", formula: "Fe_3O_4" },
//   { name: "Sulfure de cuivre(I)", formula: "Cu_2S" },
//   { name: "Oxyde de cuivre(I)", formula: "Cu_2O" },
//   { name: "Ion hydronium", formula: "H_3O^+" },
//   { name: "Ion sulfate", formula: "SO_4^{2-}" },
//   { name: "Ion fer(II)", formula: "Fe^{2+}" },
//   { name: "Ion hydroxyde", formula: "OH^-" },
//   { name: "Ion argent(I)", formula: "Ag^+" },
//   { name: "Ion phosphate", formula: "PO_4^{3-}" },
//   { name: "Phosphate d'argent(I)", formula: "Ag_3PO_4" },
//   { name: "Ion cuivre(II)", formula: "Cu^{2+}" },
//   { name: "Acétate de sodium", formula: "CH_3COONa" },
//   { name: "Phosphate de calcium", formula: "Ca_3(PO_3)_2" },
//   { name: "Chlorure d'ammonium", formula: "NH_4Cl" },
//   { name: "Cyclooctasoufre", formula: "S_8" },
//   { name: "Hydroxyde de magnésium", formula: "Mg(OH)_2" },
//   { name: "Chlorure de magnésium", formula: "MgCl_2" },
// ];

// const getId = (s: string) => {
//   return ("Mol-" +
//     s
//       .replaceAll("(", "")
//       .replaceAll(")", "")
//       .replaceAll("_", "")
//       .replaceAll("^", "")
//       .replaceAll("{", "")
//       .replaceAll("}", "")) as KeyId;
// };
export const moleculesKeysProps = moleculesData.map(
  (moleculeData): KeyProps => {
    return {
      id: moleculeData.id,
      label: textifyInLatex(moleculeData.formula),
      labelType: "tex",
      mathfieldInstructions: {
        content: textifyInLatex(moleculeData.formula),
        method: "write",
      },
      groups: ["molecules"],
    };
  }
);
