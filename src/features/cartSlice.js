import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("cart")) || [];

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		setCart: (state, action) => {
			return action.payload;
		},
		addToCart: (state, action) => {
			const existingProduct = state.find((item) => item.id === action.payload.id);
			if (existingProduct) {
				const updatedCart = state.map((item) => (item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item));
				localStorage.setItem("cart", JSON.stringify(updatedCart));
				return updatedCart;
			} else {
				const updatedCart = [...state, { ...action.payload, quantity: 1 }];
				localStorage.setItem("cart", JSON.stringify(updatedCart));
				return updatedCart;
			}
		},
		removeFromCart: (state, action) => {
			const filteredCart = state.filter((item) => item.id !== action.payload);
			localStorage.setItem("cart", JSON.stringify(filteredCart));
			return filteredCart;
		},
		incrementQuantity: (state, action) => {
			const updatedCart = state.map((item) => (item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item));
			localStorage.setItem("cart", JSON.stringify(updatedCart));
			return updatedCart;
		},
		decrementQuantity: (state, action) => {
			const updatedCart = state.map((item) => (item.id === action.payload && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item));
			localStorage.setItem("cart", JSON.stringify(updatedCart));
			return updatedCart;
		},
		clearCart: () => {
			localStorage.removeItem("cart");
			return [];
		},
	},
});

export const { setCart, addToCart, removeFromCart, incrementQuantity, decrementQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
