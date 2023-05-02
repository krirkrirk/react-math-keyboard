import React, { useRef, useState } from "react";
import { MathInput } from "../src/mathInput/mathInput";
import { MathField } from "../src/types/types";
import { Button, Grid, Typography, Dialog } from "@mui/material";
import { DialogContent } from "./dialogContent";

export type ExampleProps = {};

export const Example = ({}: ExampleProps) => {
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const mf = useRef<MathField>();
  const mf2 = useRef<MathField>();
  const mf3 = useRef<MathField>();

  const clear = (mathfield: MathField) => {
    mathfield.latex("");
  };

  const clear2 = useRef<() => void>();
  const onClick2 = () => {
    clear2.current?.();
  };
  const [open, setOpen] = useState(false);

  return (
    <>
      <div>
        <Grid>
          <Typography style={{ color: "red" }}>MUI </Typography>
          <Button onClick={() => setOpen(true)}>Open dialog</Button>
        </Grid>
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          fullWidth
          // sx={{ width: "90%" }}
        >
          <DialogContent />
        </Dialog>

        <div style={{ padding: "0rem 0.5rem 2rem" }}>
          <p style={{ paddingBottom: "1.5rem", fontSize: "1.4rem" }}>
            Input with all the keyboard keys :
          </p>
          <MathInput
            setValue={setValue}
            setMathfieldRef={(mathfield) => (mf.current = mathfield)}
          />
          <button onClick={() => clear(mf.current!)}>Clear</button>
          <p style={{ overflow: "auto" }}>Latex produced : {value}</p>
        </div>
        <div style={{ padding: "0rem 0.5rem 2rem" }}>
          <p style={{ paddingBottom: "1.5rem", fontSize: "1.4rem" }}>
            You can hide the toolbar :
          </p>
          <MathInput
            numericToolbarKeys={[]}
            setValue={setValue2}
            setClearRef={(f) => (clear2.current = f)}
          />
          <button onClick={onClick2}>Clear</button>
          <p>Latex produced : {value2}</p>
        </div>
        <div style={{ padding: "0rem 0.5rem 2rem" }}>
          <p style={{ paddingBottom: "1.5rem", fontSize: "1.4rem" }}>
            Or you can provide the keys of your choice, even custom ones :
          </p>
          <MathInput
            setValue={setValue3}
            numericToolbarKeys={[
              "euro",
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
                id: "custom logic",
                label: "custom logic",
                labelType: "raw",
                onClick: () => alert("Clicked!"),
              },
            ]}
          />
          <p>Latex produced : {value3}</p>
        </div>
      </div>
    </>
  );
};
