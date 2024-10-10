import { useEffect, useRef, useState } from "react";
import { isMobile } from "react-device-detect";
import { MathField } from "../types/types";

type FocusHandlers = {
  onForceHideKeyboard: () => void;
  showKeyboard: boolean;
};
type Props = {
  mathfieldId: number;
  loaded: boolean;
  mathfield: MathField;
};
export const useHandleFocus = ({
  mathfieldId,
  loaded,
  mathfield,
}: Props): FocusHandlers => {
  const showKeyboardRequest = useRef<"close" | "open">();
  const [showKeyboard, setShowKeyboard] = useState(false);

  const timeout = useRef<any>(null);
  const request = (type: "close" | "open") => {
    if (type === "close" && showKeyboardRequest.current === "open") return;
    if (timeout.current) clearTimeout(timeout.current);

    showKeyboardRequest.current = type;
    const eventually = () => {
      setShowKeyboard(showKeyboardRequest.current === "open");
      showKeyboardRequest.current = undefined;
    };
    timeout.current = setTimeout(eventually, 300);
  };

  useEffect(() => {
    if (!loaded) return;
    const textarea = mathfield.el().querySelector("textarea");
    isMobile && textarea?.setAttribute("readonly", "readonly");
    textarea?.addEventListener("focusin", (e) => {
      request("open");
    });
  }, [loaded]);
  useEffect(() => {
    const onMouseDown = (e: MouseEvent) => {
      if (!loaded) return [false, request];
      if (e.target instanceof HTMLElement) {
        let isKeyboardClick = false;
        let isCloseKeyClick = false;
        let element: HTMLElement | null = e.target;
        while (element !== null) {
          if (element.id.includes("close")) isCloseKeyClick = true;
          if (element.id.includes(`mq-keyboard-${mathfieldId}`)) {
            isKeyboardClick = true;
            break;
          }
          element = element.parentElement;
        }
        if (!isKeyboardClick || isCloseKeyClick) {
          request("close");
        } else request("open");
      }
    };
    window.addEventListener("mousedown", onMouseDown);
    return () => window.removeEventListener("mousedown", onMouseDown);
  }, [loaded]);
  const onForceHideKeyboard = () => {
    setShowKeyboard(false);
    // mathfield.current.blur();
  };
  return { showKeyboard, onForceHideKeyboard };
};
