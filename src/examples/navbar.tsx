import React from "react";

export type NavbarProps = {
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

export const Navbar = ({ setPage }: NavbarProps) => {
  return (
    <div className="bg-slate-100 flex flex-wrap items-center px-4 py-2 gap-x-8 mb-4 gap-y-1">
      <button
        className="p-1 bg-slate-700 text-slate-50"
        onClick={() => setPage(0)}
      >
        Example : Page
      </button>
      <button
        className="py-1 px-2 bg-slate-700 text-slate-50"
        onClick={() => setPage(1)}
      >
        Example : Container
      </button>
      <button
        className="py-1 px-2 bg-slate-700 text-slate-50"
        onClick={() => setPage(2)}
      >
        Example : Sticky
      </button>
    </div>
  );
};
