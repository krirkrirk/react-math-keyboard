import { createPortal } from "react-dom";

type Props = {
  children: React.ReactNode;
  open: boolean;
  style?: React.CSSProperties;
};

export const Portal = ({ children, open, style }: Props) => {
  return (
    <>
      {createPortal(
        <div
          role="modal"
          className="react-math-keyboard-portal"
          style={{
            position: "absolute",
            display: open ? "block" : "none",
            zIndex: 1310,
            bottom: 0,
            left: 0,
            width: "100vw",
            ...(style && style),
          }}
        >
          {children}
        </div>,
        document.body
      )}
    </>
  );
};
