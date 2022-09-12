import { useState } from "react";
import "./App.css";
import Cart from "./Component/Cart";
import Navbar from "./Shared/Navbar/Navbar";

function App() {
	const [selected, getselected] = useState([]);
	const handleProducts = (product) => {
		const newProduct = [...selected];
	};
	return (
		<div className="App">
			<Navbar />
			<Cart button={handleProducts} />
		</div>
	);
}

export default App;
