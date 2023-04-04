import { useEffect, useRef, useState } from "react";

export const useDebounce = (delay: number) => {
  const timeout = useRef<any>(null);

  const debounce = (func: () => void) => {
    const later = () => {
      clearTimeout(timeout.current);
      func();
    };

    if (timeout.current) clearTimeout(timeout.current);
    timeout.current = setTimeout(later, delay);
  };
  return debounce;
};
