import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import {MobileStepper} from "@mui/material";
import {Link} from "react-router-dom";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


const Header = {
    // 'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Headers': "*",
    // 'Accept': '*/*'
};

function SwipeableTextMobileStepper() {
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getFeaturedImages())
  }, []);

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [featuredImages, setFeaturedImages] = useState([]);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const getFeaturedImages = () => (dispatch) => {
        let config = {
            headers: Header,
        };
        axios.get(`http://127.0.0.1:8000/shop/api/featured_images/`, config).then((res) => {
            dispatch(setFeaturedImages(res.data.results));
        }).catch((err) => {
            // dispatch(setSnackBar(err.response.data.non_field_errors[0]));
        }).finally(() => {
            // dispatch(showLoadingScreen(false));
        })
  }
  return (
      <Box sx={{position: 'static'}}>
          <AutoPlaySwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {featuredImages.map((step, index) => (
              <div>
                    <Link to={step.link}>
                        <Box
                        component="img"
                        sx={{
                          height: {xs: 220, sm: 330, md: 540},
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
