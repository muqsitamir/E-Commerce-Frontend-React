import React, {useEffect, useState} from 'react'
import FeaturedImageSlider from "../components/FeaturedImageSlider";
import CenteredHeading from "../components/CenteredHeading";
import Listing from "../components/Listing";
import {useDispatch, useSelector} from "react-redux";
import {selectCategorys} from "../slices/categorySlice";
import {getFeaturedImages, selectFeaturedImages} from "../slices/featuredImageSlice";
import {useLocation} from "react-router";


export default function Main(){
  const {state} = useLocation();
    debugger;
  const {results: sports} = useSelector(selectCategorys);
  const {results: featuredImages} = useSelector(selectFeaturedImages);

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getFeaturedImages())
  }, []);

    return(
      <>
        <FeaturedImageSlider images={featuredImages.slice(0, Math.floor(featuredImages.length/2))} />
        <iframe
          style={{height: 'calc(100vw/1.77777778)', width: "100vw", marginTop: "40px"}}
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

