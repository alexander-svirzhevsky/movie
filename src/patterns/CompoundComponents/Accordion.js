import { useState } from "react";
import { AccordionContext } from "./AccordionContext";

export default function Accordion({ defaultExpanded, children }) {
  const [activSection, setActiveSection] = useState(defaultExpanded);

  const onSectionClick = (value) => {
    if (activSection === value) {
      setActiveSection("");
    } else {
      setActiveSection(value);
    }
  };
  return (
    <AccordionContext.Provider value={{ activSection, onSectionClick }}>
      <div>{children}</div>
    </AccordionContext.Provider>
  );
}
