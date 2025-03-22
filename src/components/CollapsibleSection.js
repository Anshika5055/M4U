import "../../CollapsibleSection.css";
import { useState } from "react";
const CollapsibleSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapsible-container">
      <div className="collapsible-header" onClick={() => setIsOpen(!isOpen)}>
        <h2 className="collapsible-title">{title}</h2>
        <span className="collapsible-arrow">{isOpen ? "▲" : "▼"}</span>
      </div>

      {isOpen && <div className="collapsible-content">{children}</div>}
    </div>
  );
};

export default CollapsibleSection;
