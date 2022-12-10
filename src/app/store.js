import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from "../slices/categorySlice";
import messageReducer from "../slices/messageSlice";
import featuredImageReducer from "../slices/featuredImageSlice";

export const store = configureStore({
  reducer: {
    categorys: categoryReducer,
    messages: messageReducer,
    featuredImages: featuredImageReducer,
  },
});
