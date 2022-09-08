import React from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


export default function CenteredHeading(props){
    return(
      <div style={{paddingTop: '15px', display: "flex", justifyContent: 'center'}}>
        <Box sx={{width: '580px', borderTop: "solid", borderColor: '#1d1d1d', borderWidth: 'thin', justifyContent: 'center', display: 'flex', marginTop: '30px'}}>
            <Typography sx={{ letterSpacing: '1px', paddingX: '15px', backgroundColor: 'white', marginTop: '-13px', fontFamily: 'inherit', fontWeight: 500, fontSize: {xs: '16.125px', sm: '15px', md: '16px'}, color: '#1d1d1d'}}>  {props.text}</Typography>
        </Box>
      </div>
    );
}