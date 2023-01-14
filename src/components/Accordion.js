import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Link} from "react-router-dom";
import {primary_color} from "../index";

export default function SimpleAccordion(props) {
  return (
    <div>
        {props.mainItems.map((item) => (
       <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color: primary_color}}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{fontWeight: 'bold', fontSize: 'large'}} >
            <Link to={{
                        pathname: '/' + item.name,
                        state: {main_id: item.id}
                }} style={{textDecoration: 'none', color: primary_color}}>{item.name}</Link>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {item.children.map((category) => (
              <div>
                 <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{color: primary_color}}/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography sx={{fontWeight: 'bold'}} >
                      <Link to={{
                        pathname: '/' + item.name + '/' + category.name,
                        state: {main_id: item.id, sub_id: category.id}
                }} style={{textDecoration: 'none', color: '#363636'}}>{category.name}</Link>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {category.children.map((sub_category) => (
                      <Typography sx={{marginLeft: '30px', fontWeight: 'bold'}} >
                        <Link to={{
                        pathname: '/' + item.name + '/' + category.name + '/' + sub_category.name,
                        state: {main_id: item.id, sub_id: category.id, sub_sub_id:sub_category.id}
                }}  style={{textDecoration: 'none', color: '#363636'}}>{sub_category.name}</Link>
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
