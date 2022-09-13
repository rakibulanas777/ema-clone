import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home";
import Cart from "./Component/Cart/Cart";
import Navbar from "./Shared/Navbar/Navbar";

function App() {
	const [selected, getselected] = useState([]);
	const handleProducts = (product) => {
		let newCart = [];
		const exists = selected.find(
			(productSingle) => productSingle.id === product.id
		);
		if (!exists) {
			product.quantity = 1;
			newCart = [...selected, product];
		} else {
			const rest = selected.filter(
				(productSingle) => productSingle.id !== product.id
			);
			exists.quantity = exists.quantity + 1;
			newCart = [...rest, exists];
		}
		//const newProduct = [...selected, product];
		getselected(newCart);
	};
	const inrcreament = (product) => {
		let newCart = [];
		const exists = selected.find(
			(productSingle) => productSingle.id === product.id
		);
		if (!exists) {
			product.quantity = 1;
			newCart = [...selected, product];
		} else {
			const rest = selected.filter(
				(productSingle) => productSingle.id !== product.id
			);
			exists.quantity = exists.quantity + 1;
			newCart = [...rest, exists];
		}
		//const newProduct = [...selected, product];
		getselected(newCart);
	};
	const deccreament = (product) => {
		console.log(product);
		let newCart = [];
		const exists = selected.find(
			(productSingle) => productSingle.id === product.id
		);
		if (!exists) {
			product.quantity = 1;
			newCart = [...selected, product];
		} else {
			const rest = selected.filter(
				(productSingle) => productSingle.id !== product.id
			);
			exists.quantity = exists.quantity - 1;
			newCart = [...rest, exists];
		}
		//const newProduct = [...selected, product];
		getselected(newCart);
	};
	//console.log(selected.map((v) => v.price * v.quantity));
	return (
		<div className="App">
			<Navbar cart={selected} />
			<Routes>
				<Route path="/" element={<Home button={handleProducts} />} />
				<Route
					path="/cart"
					element={
						<Cart cart={selected} plus={inrcreament} minus={deccreament} />
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
