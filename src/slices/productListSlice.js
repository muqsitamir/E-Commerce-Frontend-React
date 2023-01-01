import { createSlice } from '@reduxjs/toolkit'
import axios from "axios";
import { backend_url } from "../index.js"
// import {showLoadingScreen, setSnackBar} from "../../reusable_components/site_data/siteDataSlice";


export const productListSlice = createSlice({
  name: 'productlist',
  initialState: {
      productlist: {
          "count": 0,
          "results": []
      },
  },
  reducers: {
      setProductList: (state, action) => {
          state.productlist.results = action.payload.results;
          state.productlist.count = action.payload.count;
      },
  },
})

export const getProductList = () => (dispatch) => {
    let config = {
        headers: {},
    };
    axios.get(`${backend_url}/shop/api/product/`, config).then((res) => {
        dispatch(setProductList(res.data));
    }).catch((err) => {
        // dispatch(setSnackBar(err.response.data.non_field_errors[0]));
    }).finally(() => {
        // dispatch(showLoadingScreen(false));
    })
}


// Action creators are generated for each case reducer function
export const { setProductList } = productListSlice.actions
export const selectProductList = (state) => state.productlist.productlist;
export default productListSlice.reducer

