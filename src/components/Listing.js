import React from 'react'
import Box from "@mui/material/Box";
import {Link} from "react-router-dom";
import Button from "@mui/material/Button";
import {Grid} from "@mui/material";


export default function Listing(props){
    let img_sizing = props.sizing > 6 ? "23.5vw" : "32vw";
    let button_left_position = props.sizing > 6 ? "23%" : "27%";
    return(
        <Grid container justify="center" sx={{marginTop: '25px', marginBottom: '50px'}}>
            {props.items.map((item) => (
                <span style={{position: 'relative'}}>
                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                      m: {xs: "0px 0px 1px", sm: 1},
                      width: {xs: '100vw', sm: '47vw', md: '48vw', lg: img_sizing},
                      height: {xs: 190, sm: 'auto'},
                    },
                  }}
                >
                    <img  src={item.image}/>
                </Box>
                <Link
                    to={{
                        pathname: '/' + item.name,
                        state: {main_id: item.id}
                }}
                >
                    <Button sx={{border: "2px solid #ffffff", color: '#ffffff', backgroundColor: 'rgba(0, 0, 0, 0.5)', fontSize: '9px', letterSpacing: '1.7px', fontWeight: 800, height: '40px', width: '180px', paddingTop: '8px',position: 'absolute', top: {xs:'43%', lg: "28%"}, left: {xs:'29%', lg: button_left_position}, '&:hover': {backgroundColor: 'rgba(0, 0, 0, 0.8)'}}}>{item.name}</Button>
                </Link>
                </span>
            ))}
        </Grid>
    );
}