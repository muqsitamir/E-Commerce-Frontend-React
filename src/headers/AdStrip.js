import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import MessageCarousel from "../components/MessageCarousel";
import CancelIcon from '@mui/icons-material/Cancel';
import {useEffect} from "react";

export default function AdStrip() {
  const [visibility, setVisibility] = React.useState(true);
  useEffect(() => {
      const interval = setInterval(() => {
        setVisibility(true);
      }, 150000); //time in milliseconds for the ad strip to become visible again
      return () => clearInterval(interval);
  }, []);
  const handleAdStrip = () => {
      setVisibility(!visibility);
  }

  let contents = visibility ?
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{justifyContent: 'center'}} variant="dense">
            <MessageCarousel/>
        <CancelIcon onClick={handleAdStrip} sx={{position: "absolute", right: "15px", "&:hover": {color: "gray"}}}/>
        </Toolbar>
      </AppBar>
    </Box> : null;

  return (
    contents
  );
}
