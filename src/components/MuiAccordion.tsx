import { Accordion, AccordionDetails, AccordionSummary, Typography, Box } from '@mui/material'
import { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const MuiAccordion = () => {
    const [expand, setExpand] = useState<string | boolean>(false)
    const handleExpnd = (isExpand: boolean, panel: string) => {
        // console.log(isExpand, panel)
        setExpand(panel)

    }

    return (
        <Box sx={{ p: 5 }}>
            <Accordion onChange={(e, isExpand: boolean) => handleExpnd(isExpand, "panel1")} expanded={expand==="panel1"}>
                <AccordionSummary id="panel1" area-aria-controls='panel1' expandIcon={<ExpandMoreIcon />
                } >
                    <Typography> Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat illum voluptatibus quasi nam minus, quam modi recusandae
                    fugiat temporibus tempora sunt iusto ab ad vero voluptatem similique deserunt facilis voluptates?
                </AccordionDetails>
            </Accordion>
            <Accordion onChange={(e, isExpand: boolean) => handleExpnd(isExpand, "panel2")} expanded={expand==="panel2"}>
                <AccordionSummary id="panel2" area-aria-controls='panel2' expandIcon={<ExpandMoreIcon />
                } >
                    <Typography> Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat illum voluptatibus quasi nam minus, quam modi recusandae
                    fugiat temporibus tempora sunt iusto ab ad vero voluptatem similique deserunt facilis voluptates?
                </AccordionDetails>
            </Accordion>
            <Accordion onChange={(e, isExpand: boolean) => handleExpnd(isExpand, "panel3")} expanded={expand==="panel3"}>
                <AccordionSummary id="panel3" area-aria-controls='panel3' expandIcon={<ExpandMoreIcon />
                } >
                    <Typography> Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat illum voluptatibus quasi nam minus, quam modi recusandae
                    fugiat temporibus tempora sunt iusto ab ad vero voluptatem similique deserunt facilis voluptates?
                </AccordionDetails>
            </Accordion>


        </Box >
    )
}
export default MuiAccordion
