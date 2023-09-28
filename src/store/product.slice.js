import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 1,
      title: "iPhone 15 pro",
      price: 1999,
      category: {
        id: 1,
        title: "Apple",
      },
      image: "https://img.mvideo.ru/Big/30069479bb.jpg",
    },
  ],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct(state, action) {
      state.products = [action.payload, ...state.products];
    },
    deleteProduct(state, action) {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const productReducer = productSlice.reducer;
export const { addProduct, deleteProduct } = productSlice.actions;
