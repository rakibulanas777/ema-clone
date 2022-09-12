import { useState } from "react";
import "./App.css";
import Cart from "./Component/Cart";
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
	console.log(selected);
	return (
		<div className="App">
			<Navbar cart={selected} />
			<Cart button={handleProducts} />
		</div>
	);
}

export default App;
