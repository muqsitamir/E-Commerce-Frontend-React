import { createSlice } from '@reduxjs/toolkit'
import axios from "axios";
import { backend_url } from "../index.js"
// import {showLoadingScreen, setSnackBar} from "../../reusable_components/site_data/siteDataSlice";


export const featuredImageSlice = createSlice({
  name: 'featuredImages',
  initialState: {
      featuredImages: {
          "count": 0,
          "results": []
      },
  },
  reducers: {
      setFeaturedImages: (state, action) => {
          state.featuredImages.results = action.payload.results;
          state.featuredImages.count = action.payload.count;
      },
  },
})

export const getFeaturedImages = () => (dispatch) => {
    let config = {
        headers: {},
    };
    axios.get(`${backend_url}/shop/api/featured_image/`, config).then((res) => {
        dispatch(setFeaturedImages(res.data));
    }).catch((err) => {
        // dispatch(setSnackBar(err.response.data.non_field_errors[0]));
    }).finally(() => {
        // dispatch(showLoadingScreen(false));
    })
}


// Action creators are generated for each case reducer function
export const { setFeaturedImages } = featuredImageSlice.actions
export const selectFeaturedImages = (state) => state.featuredImages.featuredImages;
export default featuredImageSlice.reducer

