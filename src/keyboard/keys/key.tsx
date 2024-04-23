import React, {
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import $ from "jquery";

import { MathField, MathfieldInstructions } from "../../types/types";
import { MathFieldContext } from "../../mathInput/mathfieldContext";
import { KeyId } from "./keyIds";
import { KeyGroupIds } from "./keyGroup";

export type KeyProps = {
  id: KeyId;
  formatedId?: string;
  label: string | ReactNode;
  labelType: "raw" | "tex" | "svg";
  mathfieldInstructions?: MathfieldInstructions;
  onClick?: () => void;
  fullWidth?: boolean;
  isUtilityKey?: boolean;
  groups?: KeyGroupIds[];
  postKeystrokes?: string[];
  keypressId?: string;
};

export const Key = ({
  id,
  formatedId,
  label,
  labelType = "tex",
  onClick,
  mathfieldInstructions,
  fullWidth = true,
  isUtilityKey = false,
  postKeystrokes,
}: KeyProps) => {
  const mathfield = useContext(MathFieldContext);
  const trueId =
    id === "custom" ? id + Math.floor(Math.random() * 1000) : formatedId ?? id;
  useEffect(() => {
    const MQ = window.MathQuill.getInterface(2);
    MQ.StaticMath(
      $(`#mq-keyboard-${mathfield.id}-key-${trueId}`)[0]
    ) as MathField;
  }, [id, formatedId]);

  const handleClick = () => {
    if (mathfieldInstructions) {
      if (typeof mathfieldInstructions.content === "string")
        mathfield[mathfieldInstructions.method](mathfieldInstructions.content);
      else
        mathfield[mathfieldInstructions.method](
          mathfieldInstructions.content(mathfield.latex())
        );
    } else {
      onClick?.();
    }
    if (postKeystrokes?.length) {
      postKeystrokes.forEach((key) => mathfield.keystroke(key));
    }
  };

  const renderLabel = (): ReactNode => {
    switch (labelType) {
      case "raw":
        return (
          <p id={`mq-keyboard-${mathfield.id}-rawkey-${trueId}`}>
            {label as string}
          </p>
        );
      case "tex":
        return (
          <span
            id={`mq-keyboard-${mathfield.id}-key-${trueId}`}
            onClick={(e) => e.stopPropagation()}
            className="cursor-pointer"
          >
            {label as string}
          </span>
        );
      case "svg":
        return label;
    }
  };

  const bgHoverColor = isUtilityKey
    ? "var(--keyboard-color-dark)"
    : "var(--keyboard-color-light)";

  //Event states
  const [isTouchDown, setIsTouchDown] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const onMouseDown = (e: any) => {
    e.preventDefault();
    // e.stopPropagation();
    setIsClicked(true);
    handleClick();
  };

  const ref = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (ref.current) {
      for (const child of Array.from(ref.current.children)) {
        for (const grandChild of Array.from(child.children)) {
          grandChild.addEventListener("mousedown", (e: any) => {
            e.preventDefault();
            e.stopImmediatePropagation();
            setIsClicked(true);
            handleClick();
          });
        }
      }
    }
  }, []);
  return (
    <button
      className={`react-math-keyboard-key ${
        isUtilityKey && "react-math-keyboard-key-utility"
      }`}
      style={{
        ...(fullWidth
          ? { width: "100%" }
          : {
              paddingLeft: "0.625rem",
              paddingRight: "0.625rem",
              minWidth: "41px",
              flexShrink: 0,
            }),
        ...(isTouchDown && { backgroundColor: bgHoverColor }),
        ...(isClicked && {
          "border-width": "2px 0px 0px 2px",
        }),
        ...(labelType === "raw" || labelType === "svg"
          ? { paddingTop: 0 }
          : { paddingTop: "0.25rem" }),
      }}
      ref={ref}
      id={`mq-keyboard-${mathfield.id}-button-key-${trueId}`}
      onMouseDown={onMouseDown}
      onMouseUp={() => setIsClicked(false)}
      onMouseLeave={() => {
        if (!isClicked) return;
        setIsClicked(false);
      }}
      onTouchStart={() => setIsTouchDown(true)}
      onTouchEnd={() => setIsTouchDown(false)}
    >
      {renderLabel()}
    </button>
  );
};
