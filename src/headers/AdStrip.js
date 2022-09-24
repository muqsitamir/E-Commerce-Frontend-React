import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import MessageCarousel from "../components/MessageCarousel";

export default function AdStrip() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{justifyContent: 'center'}} variant="dense">
            <MessageCarousel/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
