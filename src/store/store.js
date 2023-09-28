import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./product.slice";
import { categoryReducer } from "./category.slice";

export const store = configureStore({
  reducer: {
    product: productReducer,
    category: categoryReducer,
  },
  devTools: true,
});
