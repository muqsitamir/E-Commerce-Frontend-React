import React, {useEffect, useState} from 'react'
import FeaturedImageSlider from "../components/FeaturedImageSlider";
import CenteredHeading from "../components/CenteredHeading";
import Listing from "../components/Listing";
import {useDispatch} from "react-redux";
import axios from "axios";


export default function Main(){
  let [sports, setSports] = useState([]);
  const [featuredImages, setFeaturedImages] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getFeaturedImages())
  }, []);

  useEffect(() => {
        dispatch(getSports())
    }, []);

  const getFeaturedImages = () => (dispatch) => {
        let config = {
            headers: {},
        };
        axios.get(`http://127.0.0.1:8000/shop/api/featured_images/`, config).then((res) => {
            dispatch(setFeaturedImages(res.data.results));
        }).catch((err) => {
            // dispatch(setSnackBar(err.response.data.non_field_errors[0]));
        }).finally(() => {
            // dispatch(showLoadingScreen(false));
        })
  }

  const getSports = () => (dispatch) => {
        let config = {
            headers: {},
        };
        axios.get(`http://127.0.0.1:8000/shop/api/sports/`, config).then((res) => {
            dispatch(setSports(res.data.results));
        }).catch((err) => {
            // dispatch(setSnackBar(err.response.data.non_field_errors[0]));
        }).finally(() => {
            // dispatch(showLoadingScreen(false));
        })
  }

    return(
      <>
        <FeaturedImageSlider images={featuredImages.slice(0, Math.floor(featuredImages.length/2))}/>
        <iframe
          style={{height: 'calc(100vw/1.77777778)', width: "100vw"}}
          id="iframe"
          title="Youtube video player"
          frameBorder='0'
          src="https://www.youtube.com/embed/QZwx0_HFSCw?&playlist=QZwx0_HFSCw&autoplay=1&theme=dark&mute=1&rel=0&controls=0&loop=1&modestbranding=1&showinfo=0"/>
        <CenteredHeading text='VIEW OUR BESTSELLERS' />
        <Listing items={sports}/>
        <FeaturedImageSlider images={featuredImages.slice(Math.floor(featuredImages.length/2), featuredImages.length)}/>
        <iframe
          style={{height: 'calc(100vw/1.77777778)', width: "100vw", marginTop: 40}}
          id="iframe"
          title="Youtube video player"
          frameBorder='0'
          src="https://www.youtube.com/embed/QZwx0_HFSCw?&playlist=QZwx0_HFSCw&autoplay=1&theme=dark&mute=1&rel=0&controls=0&loop=1&modestbranding=1&showinfo=0"/>
      </>
    );
}


