import SingleAccordionElement from "./single-accordion-element";
import { accordionContent } from "../constants";

const TheAccordion = () => {
  return (
    <div className="accordion-container">
      {accordionContent.map((c) => (
        <SingleAccordionElement header={c.header} content={c.content} />
      ))}
    </div>
  );
};

export default TheAccordion;
