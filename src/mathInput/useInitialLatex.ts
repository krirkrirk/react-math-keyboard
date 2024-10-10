import { useEffect, useRef } from "react";
import { MathField } from "../types/types";

const format = (str: string) => {
  return convertDoubleBackslashes(str);
};
const convertDoubleBackslashes = (str: string) => {
  return str.replace(/\\\\/g, "\\");
};

type Props = {
  loaded: boolean;
  initialLatex?: string;
  mathfield: MathField;
};
export const useInitialLatex = ({ loaded, initialLatex, mathfield }: Props) => {
  const wasInitialLatexSet = useRef(false);

  useEffect(() => {
    if (!loaded || !initialLatex) return;
    if (wasInitialLatexSet.current) return;
    mathfield.latex(format(initialLatex));
    wasInitialLatexSet.current = true;
  }, [loaded, initialLatex]);
};
