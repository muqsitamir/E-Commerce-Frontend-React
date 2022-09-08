import React from 'react'
import FeaturedImageSlider from "../components/FeaturedImageSlider";
import CenteredHeading from "../components/CenteredHeading";
import {Grid, Pagination, Stack} from "@mui/material";
import Product from "../features/listing/Product";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";


export default function Main(){
    let products = [0,1,2,4,5,6,7,8,9, 10, 11];
    return(
      <>
        <FeaturedImageSlider/>
        <iframe
          style={{height: 'calc(100vw/1.77777778)', width: "100vw"}}
          id="iframe"
          title="Youtube video player"
          frameBorder='0'
          src="https://www.youtube.com/embed/QZwx0_HFSCw?&playlist=QZwx0_HFSCw&autoplay=1&theme=dark&mute=1&rel=0&controls=0&loop=1&modestbranding=1&showinfo=0"/>
        <CenteredHeading text='VIEW OUR BESTSELLERS' />
            <Grid container justify="center" sx={{marginTop: '25px'}}>
                {products?.map((product) => (
                    <span style={{position: 'relative'}}>
                    <Box
                      sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        '& > :not(style)': {
                          m: {xs: "0px 0px 1px", sm: 1},
                          width: {xs: '100vw', sm: '47vw', md: '48vw', lg: '23.5vw'},
                          height: {xs: 190, sm: 'auto'},
                        },
                      }}
                    >
                        <img src={require('../images/a0356479-1f48-44b1-9140-a5d56d4fd855.png')}/>
                    </Box>
                    <Link to='#about-section'>
                        <Button sx={{border: "2px solid #ffffff", color: '#ffffff', backgroundColor: 'rgba(0, 0, 0, 0.5)', fontSize: '9px', letterSpacing: '1.7px', fontWeight: 800, height: '40px', width: '180px', paddingTop: '8px',position: 'absolute', top: '43%', left: '29%', '&:hover': {backgroundColor: 'rgba(0, 0, 0, 0.8)'}}}>About project</Button>
                    </Link>
                    </span>
                ))}
            </Grid>
      </>
    );
}


