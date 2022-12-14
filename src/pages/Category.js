import React, {useEffect} from 'react'
import {useHistory, useLocation} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import FeaturedImageSlider from "../components/FeaturedImageSlider";
import {getFeaturedImages, selectFeaturedImages} from "../slices/featuredImageSlice";
import {getSubcategorys, selectSubcategorys} from "../slices/subcategorySlice";
import Listing from "../components/Listing";


export default function Category(props){
    // const {state} = useLocation();
    const history = useHistory();
    let category_name = window.location.pathname.split("/").slice(1,2)[0];
    let category_lineage = window.location.pathname.split("/").slice(1).join(",")

    const {results: featuredImages} = useSelector(selectFeaturedImages);
    const {results: subcategorys} = useSelector(selectSubcategorys);
    debugger;
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getFeaturedImages(category_name))
    }, [history.location.pathname]);

    useEffect(() => {
      dispatch(getSubcategorys(category_lineage))
    }, [history.location.pathname]);

    return(
      <>
          <FeaturedImageSlider images={featuredImages} />
          <Listing items={subcategorys[0].children} sizing={subcategorys[0].children.length}/>
      </>
    );
}