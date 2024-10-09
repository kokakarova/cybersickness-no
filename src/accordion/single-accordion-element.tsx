import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

type Props = {
    header: string,
    subHeader: string,
    content: string
};

const SingleAccordionElement = ({header, subHeader, content}: Props) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ArrowDropDownIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        {header}
      </AccordionSummary>
      <AccordionDetails>
        <h3>{subHeader}</h3>
        <div>
          {content}
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default SingleAccordionElement;
