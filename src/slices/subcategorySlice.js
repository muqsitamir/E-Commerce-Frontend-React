import { createSlice } from '@reduxjs/toolkit'
import axios from "axios";
import { backend_url } from "../index.js"
// import {showLoadingScreen, setSnackBar} from "../../reusable_components/site_data/siteDataSlice";


export const subcategorySlice = createSlice({
  name: 'subcategorys',
  initialState: {
      subcategorys: {
          "count": 0,
          "results": []
      },
  },
  reducers: {
      setSubcategorys: (state, action) => {
          state.subcategorys.results = action.payload.results;
          state.subcategorys.count = action.payload.count;
      },
  },
})

export const getSubcategorys = (e) => (dispatch) => {
    let category_name = e == null ? "" : "?category_name=" + e;
    let config = {
        headers: {},
    };
    axios.get(`${backend_url}/shop/api/category/${category_name}`, config).then((res) => {
        dispatch(setSubcategorys(res.data));
    }).catch((err) => {
        // dispatch(setSnackBar(err.response.data.non_field_errors[0]));
    }).finally(() => {
        // dispatch(showLoadingScreen(false));
    })
}


// Action creators are generated for each case reducer function
export const { setSubcategorys } = subcategorySlice.actions
export const selectSubcategorys = (state) => state.subcategorys.subcategorys;
export default subcategorySlice.reducer

