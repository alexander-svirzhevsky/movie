import React, { useContext, createContext } from "react";

export const AccordionContext = createContext();

export const useAccordionContext = () => {
  const context = useContext(AccordionContext);

  if (!context) {
    throw new Error("call this hook inside AccordionContext!");
  }

  return context;
};
