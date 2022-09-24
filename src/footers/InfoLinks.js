import React, {useState} from 'react'
import Box from "@mui/material/Box";
import {Link} from "react-router-dom";
import Button from "@mui/material/Button";
import {FormControl, Grid, Input, InputAdornment, InputLabel} from "@mui/material";
import Typography from "@mui/material/Typography";

export default function Footer(){
    const [email, setEmail] = useState("")

    const handleEmailSubmit = () => {
        console.log(email)
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    return(
        <>
            <Grid container justify="center" sx={{marginY: '60px'}}>
                <span>
                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                      m: {xs: "0px 0px 1px", sm: 1},
                      width: {xs: '100vw', lg: '23.5vw'},
                      height: 'auto',
                    },
                  }}
                >
                     <Typography sx={{ marginX: {md: "60px"}, display: {md: 'inline'}, textAlign: 'center', color: '#1d1d1d', fontWeight: 400, fontSize: '12px', textTransform: 'uppercase', lineHeight: 1.7}} variant="subtitle1" gutterBottom>
                        <Link to='' style={{color: '#1d1d1d', textDecoration: 'none'}}>
                        ABOUT US
                         </Link>
                      </Typography>
                </Box>
                </span>
                <span>
                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                      m: {xs: "0px 0px 1px", sm: 1},
                      width: {xs: '100vw', lg: '23.5vw'},
                      height: 'auto',
                    },
                  }}
                >
                     <Typography sx={{ marginX: {md: "60px"}, display: {md: 'inline'}, textAlign: 'center', color: '#1d1d1d', fontWeight: 400, fontSize: '12px', textTransform: 'uppercase', lineHeight: 1.7}} variant="subtitle1" gutterBottom>
                        <Link to='' style={{color: '#1d1d1d', textDecoration: 'none'}}>
                        COMPANY POLICY
                         </Link>
                      </Typography>
                </Box>
                </span>
                <span>
                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                      m: {xs: "0px 0px 1px", sm: 1},
                      width: {xs: '100vw', lg: '23.5vw'},
                      height: 'auto',
                    },
                  }}
                >
                     <Typography sx={{ marginX: {md: "60px"}, display: {md: 'inline'}, textAlign: 'center', color: '#1d1d1d', fontWeight: 400, fontSize: '12px', textTransform: 'uppercase', lineHeight: 1.7}} variant="subtitle1" gutterBottom>
                        <Link to='' style={{color: '#1d1d1d', textDecoration: 'none'}}>
                        MY ACCOUNT
                         </Link>
                      </Typography>
                </Box>
                </span>
                <span>
                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                      m: {xs: "0px 0px 1px", sm: 1},
                      width: {xs: '100vw', lg: '23.5vw'},
                      height: 'auto',
                    },
                  }}
                >
                     <Typography sx={{ marginX: {md: "60px"}, display: {md: 'inline'}, textAlign: 'center', color: '#1d1d1d', fontWeight: 400, fontSize: '12px', textTransform: 'uppercase', lineHeight: 1.7}} variant="subtitle1" gutterBottom>
                        <Link to='' style={{color: '#1d1d1d', textDecoration: 'none'}}>
                        PRIVACY
                         </Link>
                      </Typography>
                </Box>
                </span>
                <span>
                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                      m: {xs: "0px 0px 1px", sm: 1},
                      width: {xs: '100vw', lg: '23.5vw'},
                      height: 'auto',
                    },
                  }}
                >
                     <Typography sx={{ marginX: {md: "60px"}, display: {md: 'inline'}, textAlign: 'center', color: '#1d1d1d', fontWeight: 400, fontSize: '12px', textTransform: 'uppercase', lineHeight: 1.7}} variant="subtitle1" gutterBottom>
                        <Link to='' style={{color: '#1d1d1d', textDecoration: 'none'}}>
                        ORDERING INFORMATION
                         </Link>
                      </Typography>
                </Box>
                </span>
                <span>
                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                      m: {xs: "0px 0px 1px", sm: 1},
                      width: {xs: '100vw', lg: '23.5vw'},
                      height: 'auto',
                    },
                  }}
                >
                     <Typography sx={{ marginX: {md: "60px"}, display: {md: 'inline'}, textAlign: 'center', color: '#1d1d1d', fontWeight: 400, fontSize: '12px', textTransform: 'uppercase', lineHeight: 1.7}} variant="subtitle1" gutterBottom>
                        <Link to='' style={{color: '#1d1d1d', textDecoration: 'none'}}>
                        RETURN INFORMATION
                         </Link>
                      </Typography>
                </Box>
                </span>
                <span>
                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                      m: {xs: "0px 0px 1px", sm: 1},
                      width: {xs: '100vw', lg: '23.5vw'},
                      height: 'auto',
                    },
                  }}
                >
                     <Typography sx={{ marginX: {md: "60px"}, display: {md: 'inline'}, textAlign: 'center', color: '#1d1d1d', fontWeight: 400, fontSize: '12px', textTransform: 'uppercase', lineHeight: 1.7}} variant="subtitle1" gutterBottom>
                        <Link to='' style={{color: '#1d1d1d', textDecoration: 'none'}}>
                        WARRANTY INFORMATION
                         </Link>
                      </Typography>
                </Box>
                </span>
                <span>
                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                      m: {xs: "0px 0px 1px", sm: 1},
                      width: {xs: '100vw', lg: '23.5vw'},
                      height: 'auto',
                    },
                  }}
                >
                     <Typography sx={{ marginX: {md: "60px"}, display: {md: 'inline'}, textAlign: 'center', color: '#1d1d1d', fontWeight: 400, fontSize: '12px', textTransform: 'uppercase', lineHeight: 1.7}} variant="subtitle1" gutterBottom>
                        <Link to='' style={{color: '#1d1d1d', textDecoration: 'none'}}>
                        PRODUCT VERIFICATION
                         </Link>
                      </Typography>
                </Box>
                </span>

        </Grid>


        <div style={{display: 'flex', justifyContent: 'center'}}>
            <Box sx={{width: {xs:260, sm: 400}}}>
                <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                  <InputLabel htmlFor="email-update">SIGN-UP FOR EMAIL UPDATES:</InputLabel>
                  <Input
                    id="email-update"
                    onChange={handleEmailChange}
                    startAdornment={<InputAdornment position="start">📧</InputAdornment>}
                  />
                </FormControl>
            </Box>
        </div>

        <div style={{display: 'flex', justifyContent: 'center'}}>
            <Button sx={{ marginLeft: '10px', textTransform: 'none'}} onClick={handleEmailSubmit} variant="contained" size="small">Submit</Button>
        </div>

        <div style={{marginTop: 90, display: 'flex', justifyContent: 'center'}}>
            <Link to=''><img style={{paddingLeft: '5px'}} src={require('../images/logo.png')}/></Link>
        </div>

        <div style={{ marginBottom: '15px',display: 'flex', justifyContent: 'center', marginTop: '-25px'}}>
            <p style={{textAlign: 'center', fontSize: '10px', fontWeight: 300, lineHeight: 3, color: '#707070'}}>© 2022 AI Sports Pak. All rights reserved. </p>
        </div>
        </>
    );
}