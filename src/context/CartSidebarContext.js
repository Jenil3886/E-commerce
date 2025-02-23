import React, { createContext, useState, useContext } from "react";

const CartSidebarContext = createContext();

export const useCartSidebar = () => {
	return useContext(CartSidebarContext);
};

export const CartSidebarProvider = ({ children }) => {
	const [isCartOpen, setIsCartOpen] = useState(false);

	const toggleCartSidebar = () => {
		setIsCartOpen((prev) => !prev);
	};

	return <CartSidebarContext.Provider value={{ isCartOpen, toggleCartSidebar }}>{children}</CartSidebarContext.Provider>;
};
