import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import {Link} from "react-router-dom";
import {useState} from "react";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function SwipeableTextMobileStepper(props) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };


  return (
      <Box sx={{position: 'static'}}>
          <AutoPlaySwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {props.images.map((step) => (
              <div>
                    <Link to={step.link}>
                        <Box
                        component="img"
                        sx={{
                          height: {xs: 220, sm: 330, md: props.max_height},
                          display: 'block',
                          maxWidth: "100%",
                          width: '100%',
                        }}
                        src={step.image}
                        />
                    </Link>
              </div>
            ))}
          </AutoPlaySwipeableViews>
          {/*<div id='lums-img-button' style={{ display: 'flex', justifyContent: 'center'}}>*/}
          {/*      <MobileStepper*/}
          {/*          sx={{ display: 'none' }}*/}
          {/*      steps={maxSteps}*/}
          {/*      position="static"*/}
          {/*      activeStep={activeStep}*/}
          {/*    />*/}
          {/*</div>*/}
    </Box>
  );
}

export default SwipeableTextMobileStepper;
