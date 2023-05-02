import React, { useCallback, useRef, useState } from "react";
import { MathInput } from "../src/mathInput/mathInput";
import { MathField } from "../src/types/types";
import { Button, Grid, Typography, Dialog } from "@mui/material";

export const DialogContent = () => {
  //   const ref = useRef<HTMLDivElement>(null);

  const [container, setContainer] = useState<HTMLDivElement>();
  const handleRect = useCallback((node: any) => {
    console.log(node);
    setContainer(node);
    // setElementRect(node?.getBoundingClientRect());
  }, []);

  const mf = useRef<MathField>();
  const scroll = () => {
    const height = container!.getBoundingClientRect().height;
    const delta =
      window.innerHeight - mf.current!.el().getBoundingClientRect().top;
    console.log(container);
    console.log(mf.current!.el().getBoundingClientRect().top);
    console.log(delta);
    if (delta < 400) {
      mf.current?.el().scrollIntoView({ behavior: "smooth" });
    }
    if (delta > height - 30) {
      mf.current?.el().scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div ref={handleRect}>
      <Typography sx={{ fontSize: "2rem" }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas vel
        id ullam cumque, ducimus temporibus velit voluptatum aliquam
        repudiandae, quas at voluptates magnam vero exercitationem aliquid
        officia magni laboriosam. Fugiat!
      </Typography>
      <Typography sx={{ fontSize: "2rem" }}>
        {" "}
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum,
        asperiores! Ipsam obcaecati dolore dolores ex molestiae? Tempore
        sapiente quasi, earum odit, voluptates omnis vitae numquam aliquid
        maxime a inventore expedita.{" "}
      </Typography>
      {!!container && (
        <MathInput
          container={container}
          scrollType="raw"
          setMathfieldRef={(mathfield) => (mf.current = mathfield)}
        />
      )}
      <Typography sx={{ fontSize: "2rem" }}>
        {" "}
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores
        corrupti dolores velit obcaecati vitae esse error, sapiente magnam
        soluta in totam sit, rem quam distinctio enim deleniti, possimus
        assumenda maiores? Lorem ipsum dolor sit, amet consectetur adipisicing
        elit.{" "}
      </Typography>{" "}
      <button onClick={scroll}>scroll</button>
      <Typography sx={{ fontSize: "2rem" }}>
        {" "}
        Quas reprehenderit, dolor cum, accusamus qui culpa eligendi suscipit
        consequuntur laudantium corporis eos facilis nulla velit. Nemo soluta
        nesciunt assumenda perferendis non.
      </Typography>
    </div>
  );
};
