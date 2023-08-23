import React from "react";
import ReactDOM from "react-dom/client";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./asssets/styles/bootstrap.custom.css";
import "./asssets/styles/index.css";
import App from "./App";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import NotFoundScreen from "./screens/NotFoundScreen";
import CartScreen from "./screens/CartScreen";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route index={true} path="/" element={<HomeScreen />} />
			<Route path="/product/:id" element={<ProductScreen />} />
			<Route path="/cart" element={<CartScreen />} />
			<Route path="*" element={<NotFoundScreen />} />
		</Route>
	)
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
