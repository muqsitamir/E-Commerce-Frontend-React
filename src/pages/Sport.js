import React, {useEffect, useState} from 'react'
import {useLocation, useParams} from "react-router";
import axios from "axios";
import {useDispatch} from "react-redux";
import FeaturedImageSlider from "../components/FeaturedImageSlider";
import Listing from "../components/Listing";


export default function Sport(props){
    const {state} = useLocation();
    const { name } = useParams();
    const [sport, setSport] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
            dispatch(getSport())
    }, []);

    const getSport = () => (dispatch) => {
        let config = {
            headers: {},
        };
        axios.get(`http://127.0.0.1:8000/shop/api/sports/?name=${name}`, config).then((res) => {
            dispatch(setSport(res.data.results[0]));
        }).catch((err) => {
            // dispatch(setSnackBar(err.response.data.non_field_errors[0]));
        }).finally(() => {
            // dispatch(showLoadingScreen(false));
        })
    }

    let featured = sport.length != 0 ? [
        {
            image: sport.featured_image1,
            link: sport.featured_image_link1
        },
        {
            image: sport.featured_image2,
            link: sport.featured_image_link2
        },
        {
            image: sport.featured_image3,
            link: sport.featured_image_link3
        }
    ] : [];

    // let player_img = [
    //     {
    //         image: sport.featured_player
    //     }
    // ]

    return(
      <>
        <FeaturedImageSlider images={featured}/>
          muqsit
      </>
    );
}