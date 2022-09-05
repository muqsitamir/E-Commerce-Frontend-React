import { configureStore } from '@reduxjs/toolkit';
import productsReducer from "../features/listing/productsSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});
