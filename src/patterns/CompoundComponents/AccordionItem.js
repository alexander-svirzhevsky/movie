import { useAccordionContext } from "./AccordionContext";

export default function AccordionItem({ value, children }) {
  const { activSection, onSectionClick } = useAccordionContext();

  return (
    <div className="accordion-item">
      <button
        className="accordion-item-header"
        onClick={() => {
          onSectionClick(value);
        }}
      >
        {children}
      </button>
      {value === activSection ? (
        <div className="accordion-item-body">Text of {value}</div>
      ) : null}
    </div>
  );
}
