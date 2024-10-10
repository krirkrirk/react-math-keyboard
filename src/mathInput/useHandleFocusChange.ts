import { useEffect } from "react";
import { MathField } from "../types/types";
import $ from "jquery";

type Props = {
  showKeyboard: boolean;
  mathfield: MathField;
  scrollType: "window" | "raw";
  rootElementId?: string;
  loaded: boolean;
};

export const useHandleFocusChange = ({
  showKeyboard,
  mathfield,
  scrollType,
  rootElementId,
  loaded,
}: Props) => {
  useEffect(() => {
    if (!loaded) return;
    if (showKeyboard) {
      if (rootElementId) {
        $(`#${rootElementId}`).css("padding-bottom", `300px`);
      } else {
        $("body").css("padding-bottom", `300px`);
      }
      const delta =
        window.innerHeight - mathfield.el().getBoundingClientRect().top;
      if (delta < 400) {
        if (scrollType === "window")
          window.scrollBy({ top: 400 - delta, behavior: "smooth" });
        else mathfield.el().scrollIntoView({ behavior: "smooth" });
      }
      if (delta > window.innerHeight - 30)
        if (scrollType === "window")
          window.scrollBy({ top: -50, behavior: "smooth" });
        else mathfield.el().scrollIntoView({ behavior: "smooth" });
    } else {
      if (rootElementId) {
        $(`#${rootElementId}`).css("padding-bottom", 0);
      } else {
        $("body").css("padding-bottom", 0);
      }
    }
    return () => {
      if (rootElementId) {
        $(`#${rootElementId}`).css("padding-bottom", 0);
      } else {
        $("body").css("padding-bottom", 0);
      }
    };
  }, [showKeyboard, rootElementId, scrollType]);
};
