import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import axios from "axios";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Header = {
    // 'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Headers': "*",
    // 'Accept': '*/*'
};


export default function MessageCarousel() {
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getMessages())
  }, []);

  const [messages, setMessages] = useState([]);
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };


  const getMessages = () => (dispatch) => {
        let config = {
            headers: Header,
        };
        axios.get(`http://0.0.0.0:8000/shop/api/messages/`, config).then((res) => {
            dispatch(setMessages(res.data.results));
        }).catch((err) => {
            // dispatch(setSnackBar(err.response.data.non_field_errors[0]));
        }).finally(() => {
            // dispatch(showLoadingScreen(false));
        })
  }



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
              <h4 style={{color: 'white', textAlign: 'center'}}> {step.message} {step.link ? <a href={step.link} style={{color: 'white'}}> Shop Now</a> : " "} </h4>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </Box>
  );
}

