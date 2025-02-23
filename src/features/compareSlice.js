import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("compare")) || [];

const compareSlice = createSlice({
	name: "compare",
	initialState,
	reducers: {
		addToCompare: (state, action) => {
			const existingProduct = state.find((item) => item.id === action.payload.id);
			if (!existingProduct) {
				const updatedCompare = [...state, action.payload];
				localStorage.setItem("compare", JSON.stringify(updatedCompare));
				return updatedCompare;
			}
		},
		removeFromCompare: (state, action) => {
			const updatedCompare = state.filter((item) => item.id !== action.payload);
			localStorage.setItem("compare", JSON.stringify(updatedCompare));
			return updatedCompare;
		},
	},
});

export const { addToCompare, removeFromCompare } = compareSlice.actions;
export default compareSlice.reducer;
