import React from "react";
import "./App.css";
import { CartSidebarProvider } from "./context/CartSidebarContext";
import { CartProvider } from "./context/CartContext";
import AppRouter from "./pages/Router";

function App() {
	return (
		<CartProvider>
			<CartSidebarProvider>
				<AppRouter />
			</CartSidebarProvider>
		</CartProvider>
	);
}

export default App;
