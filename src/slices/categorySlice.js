import { createSlice } from '@reduxjs/toolkit'
import axios from "axios";
import { backend_url } from "../index.js"
// import {showLoadingScreen, setSnackBar} from "../../reusable_components/site_data/siteDataSlice";


export const categorySlice = createSlice({
  name: 'categorys',
  initialState: {
      categorys: {
          "count": 0,
          "results": []
      },
  },
  reducers: {
      setCategorys: (state, action) => {
          state.categorys.results = action.payload.results;
          state.categorys.count = action.payload.count;
      },
  },
})

export const getCategorys = () => (dispatch) => {
    let config = {
        headers: {},
    };
    axios.get(`${backend_url}/shop/api/category/`, config).then((res) => {
        dispatch(setCategorys(res.data));
    }).catch((err) => {
        // dispatch(setSnackBar(err.response.data.non_field_errors[0]));
    }).finally(() => {
        // dispatch(showLoadingScreen(false));
    })
}


// Action creators are generated for each case reducer function
export const { setCategorys } = categorySlice.actions
export const selectCategorys = (state) => state.categorys.categorys;
export default categorySlice.reducer

