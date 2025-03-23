import type { Meta, StoryObj } from "@storybook/react";
import { useRef, useState } from "react";
import { MathInput } from "./mathInput";
import { MathField } from "../types/types";
const meta = {
  title: "UI/MathInput",
  component: MathInput,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof MathInput>;

export default meta;
type Story = StoryObj<typeof meta>;

const NoKeysInput = () => {
  const [value, setValue] = useState("");
  const mf = useRef<MathField>();
  return (
    <MathInput
      setValue={setValue}
      setMathfieldRef={(mathfield) => (mf.current = mathfield)}
      lang="en"
      numericToolbarKeys={[]}
    />
  );
};
export const NoKeys: Story = {
  render: () => <NoKeysInput />,
};

const SomeKeysInput = () => {
  const [value, setValue] = useState("");
  const mf = useRef<MathField>();
  return (
    <MathInput
      setValue={setValue}
      setMathfieldRef={(mathfield) => (mf.current = mathfield)}
      lang="en"
      numericToolbarKeys={[
        {
          id: "custom",
          label: "wow",
          labelType: "raw",
          mathfieldInstructions: {
            content:
              "\\frac{\\int_a^b 2\\pi e^{2ix}\\cos(\\theta) \\gamma}{\\sum_2^9 i^2 - 1}",
            method: "write",
          },
        },
        {
          id: "custom",
          label: "custom logic",
          labelType: "raw",
          onClick: () => alert("Clicked!"),
        },
        "rationals",
        "fParenthesis",
      ]}
    />
  );
};

export const SomeKeys: Story = {
  render: () => <SomeKeysInput />,
};

const AllKeysInput = () => {
  const [value, setValue] = useState("");
  const mf = useRef<MathField>();
  return (
    <MathInput
      setValue={setValue}
      setMathfieldRef={(mathfield) => (mf.current = mathfield)}
      lang="en"
      // forbidPaste
      // withShowKeyboardButton
    />
  );
};
export const AllKeys: Story = {
  render: () => <AllKeysInput />,
};
