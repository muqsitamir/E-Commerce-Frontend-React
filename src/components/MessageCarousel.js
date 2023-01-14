import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getMessages, selectMessages} from "../slices/messageSlice";
import {main_text_color} from "../index";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default function MessageCarousel() {
  const {results: messages} = useSelector(selectMessages);
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getMessages())
  }, []);
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {messages.map((step, index) => (
          <div>
            {Math.abs(activeStep - index) <= 2 ? (
              <h4 style={{color: 'white', textAlign: 'center'}}> {step.message} {step.link ? <a href={step.link} style={{color: main_text_color}}> Shop Now</a> : " "} </h4>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </Box>
  );
}

