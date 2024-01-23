import React, { createContext, useContext, useState } from "react";

interface DropdownContextProps {
  openDropdown: number | null;
  open: (index: number) => void;
  close: () => void;
}

const DropdownContext = createContext<DropdownContextProps | undefined>(undefined);

interface DropdownProviderProps {
  children: React.ReactNode;
}

export const DropdownProvider: React.FC<DropdownProviderProps> = ({ children }) => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const open = (index: number) => {
    setOpenDropdown(index);
  };

  const close = () => {
    setOpenDropdown(null);
  };

  return (
    <DropdownContext.Provider value={{ openDropdown, open, close }}>
      {children}
    </DropdownContext.Provider>
  );
};

export const useDropdownContext = () => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error("useDropdownContext must be used within a DropdownProvider");
  }
  return context;
};
