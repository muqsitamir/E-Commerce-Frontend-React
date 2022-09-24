import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Link} from "react-router-dom";

export default function SimpleAccordion(props) {
  return (
    <div>
        {props.mainItems.map((item) => (
       <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color: "#1976d2"}}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{fontWeight: 'bold', fontSize: 'large'}} >
            <Link to={"/sport/" + item.name} style={{textDecoration: 'none', color: "#1976d2"}}>{item.name}</Link>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {item.categories.map((category) => (
              <div>
                 <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{color: "#1976d2"}}/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography sx={{fontWeight: 'bold'}} >
                      <Link to={'/' + item.name + '/' + category.name} style={{textDecoration: 'none', color: '#363636'}}>{category.name}</Link>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {category.sub_categories.map((sub_category) => (
                      <Typography sx={{marginLeft: '30px', fontWeight: 'bold'}} >
                        <Link to={'/' + item.name + '/' + category.name + '/' + sub_category.name} style={{textDecoration: 'none', color: '#363636'}}>{sub_category.name}</Link>
                      </Typography>
                    ))}
                  </AccordionDetails>
                </Accordion>
              </div>
            ))}
          </Typography>
        </AccordionDetails>
      </Accordion>
        ))}
    </div>
  );
}
