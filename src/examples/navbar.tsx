import React from "react";

export type NavbarProps = {
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

export const Navbar = ({ setPage }: NavbarProps) => {
  return (
    <div
      style={{
        backgroundColor: "#f1f5f9",
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        padding: "0.5rem 1rem",
        marginBottom: "1rem",
        rowGap: "0.25rem",
        columnGap: "2rem",
      }}
    >
      <button
        onClick={() => setPage(0)}
        style={{
          border: "none",
          backgroundColor: "#334155",
          color: "#f8fafc",
          padding: "0.5rem",
        }}
      >
        Example : Page
      </button>
      <button
        onClick={() => setPage(1)}
        style={{
          border: "none",
          backgroundColor: "#334155",
          color: "#f8fafc",
          padding: "0.5rem",
        }}
      >
        Example : Container
      </button>
    </div>
  );
};
