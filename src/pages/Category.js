import React, {useEffect, useState} from 'react'
import {useHistory, useLocation} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import FeaturedImageSlider from "../components/FeaturedImageSlider";
import {getFeaturedImages, selectFeaturedImages} from "../slices/featuredImageSlice";
import {getSubcategorys, selectSubcategorys} from "../slices/subcategorySlice";
import Listing from "../components/Listing";
import Breadcrumbs from "../components/Breadcrumbs";



export default function Category(props){
    // const {state} = useLocation();
    const history = useHistory();
    let category_name = window.location.pathname.split("/").slice(1,2)[0];
    let category_lineage = window.location.pathname.split("/").slice(1).join(",");

    const {results: all_featured_imgs} = useSelector(selectFeaturedImages);
    const [featuredImages, setFeaturedImages] = useState([]);
    const [endorsementImage, setEndorsementImage] = useState([]);
    const {results: subcategorys} = useSelector(selectSubcategorys);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getFeaturedImages(category_name))
    }, [history.location.pathname]);

    useEffect(() => {
        setFeaturedImages(all_featured_imgs.filter(item => !(item.category_endorsement_pic == true)))
    }, [all_featured_imgs])

    useEffect(() => {
        setEndorsementImage(all_featured_imgs.filter(item => !(item.category_endorsement_pic != true)))
    }, [all_featured_imgs])

    useEffect(() => {
      dispatch(getSubcategorys(category_lineage))
    }, [history.location.pathname]);

    if(subcategorys.length > 0){
        if(subcategorys[0].children.length == 0){
            history.push(window.location.pathname + "/View-All");
        }
    }

    return(
      <>
          <FeaturedImageSlider images={featuredImages} max_height={540} />
          <Breadcrumbs ml={20} mt={5}/>
          <Listing items={subcategorys.length > 0 ? subcategorys[0].children : subcategorys} sizing={subcategorys.length > 0 ? subcategorys[0].children.length : 0}/>
          <FeaturedImageSlider images={endorsementImage} max_height={340} />
          <iframe
          style={{height: 'calc(100vw/1.77777778)', width: "100vw", marginTop: 40}}
          id="iframe"
          title="Youtube video player"
          frameBorder='0'
          src="https://www.youtube.com/embed/QZwx0_HFSCw?&playlist=QZwx0_HFSCw&autoplay=1&theme=dark&mute=1&rel=0&controls=0&loop=1&modestbranding=1&showinfo=0"/>
      </>
    );
}