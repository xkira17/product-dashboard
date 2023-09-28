import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  categories: [{ id: 1, title: "Apple" }],
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    addCategory(state, action) {
      state.categories = [action.payload, ...state.categories];
    },
    deleteCategory(state, action) {
      state.categories = state.categories.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const categoryReducer = categorySlice.reducer;
export const { addCategory, deleteCategory } = categorySlice.actions;
