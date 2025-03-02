import { createSlice } from "@reduxjs/toolkit";

const initialState = { products: JSON.parse(localStorage.getItem("wishlist") || "[]") };

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      state.products = [...state.products, action.payload];
      localStorage.setItem("wishlist", JSON.stringify(state.products));
    },
    removeFromWishlist: (state, action) => {
      state.products.filter((item) => item.id !== action.payload);
      state.products = state.products.filter((item) => item.id !== action.payload);
      localStorage.setItem("wishlist", JSON.stringify(state.products));
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
