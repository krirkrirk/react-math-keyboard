import { createContext } from "react";
import { MathField } from "../types/types";

export const MathFieldContext = createContext<MathField>({} as MathField);
