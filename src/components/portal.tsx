import { createPortal } from "react-dom";

type Props = {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
  style?: React.CSSProperties;
};

export const Portal = ({ children, open, onClose, style }: Props) => {
  return (
    <>
      {createPortal(
        <div
          role="modal"
          style={{
            position: "absolute",
            backgroundColor: "white",
            display: open ? "block" : "none",
            zIndex: 1300,
            margin: 2,
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
