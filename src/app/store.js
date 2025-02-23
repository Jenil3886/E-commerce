import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "../features/wishlistSlice";
import cartReducer from "../features/cartSlice";
import compareReducer from "../features/compareSlice";

const store = configureStore({
	reducer: {
		wishlist: wishlistReducer,
		cart: cartReducer,
		compare: compareReducer,
	},
});

export default store;
