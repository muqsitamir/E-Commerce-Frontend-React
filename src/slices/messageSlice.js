import { createSlice } from '@reduxjs/toolkit'
import axios from "axios";
import { backend_url } from "../index.js"
// import {showLoadingScreen, setSnackBar} from "../../reusable_components/site_data/siteDataSlice";


export const messageSlice = createSlice({
  name: 'messages',
  initialState: {
      messages: {
          "count": 0,
          "results": []
      },
  },
  reducers: {
      setMessages: (state, action) => {
          state.messages.results = action.payload.results;
          state.messages.count = action.payload.count;
      },
  },
})

export const getMessages = () => (dispatch) => {
    let config = {
        headers: {},
    };
    axios.get(`${backend_url}/shop/api/message/`, config).then((res) => {
        dispatch(setMessages(res.data));
    }).catch((err) => {
        // dispatch(setSnackBar(err.response.data.non_field_errors[0]));
    }).finally(() => {
        // dispatch(showLoadingScreen(false));
    })
}


// Action creators are generated for each case reducer function
export const { setMessages } = messageSlice.actions
export const selectMessages = (state) => state.messages.messages;
export default messageSlice.reducer

