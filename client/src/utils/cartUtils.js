import { addDecimals } from "../helpers/helper";

export const updateCart = (state) => {
	//   Calculate items Price
	state.itemsPrice = addDecimals(
		state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
	);

	//   Calculate Shipping Price (If order total price is > 100 "free" : $10)
	state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 10);

	//   Calculate Tax Price (15% tax )
	state.taxPrice = addDecimals(Number(0.15 * state.itemsPrice).toFixed(2));

	//   Calculate Total Price
	state.totalPrice = Number(
		Number(state.itemsPrice) +
			Number(state.taxPrice) +
			Number(state.shippingPrice)
	).toFixed(2);

	localStorage.setItem("cart", JSON.stringify(state));

	return state;
};
