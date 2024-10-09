import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { ContentType } from "../types";

type Props = {
  header: string;
  content: ContentType[];
};

const SingleAccordionElement = ({ header, content }: Props) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ArrowDropDownIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        {header}
      </AccordionSummary>
      {content.map((c) => (
        <AccordionDetails>
          <h4>{c.subHeader}</h4>
          <div>{c.text}</div>
        </AccordionDetails>
      ))}
    </Accordion>
  );
};

export default SingleAccordionElement;
