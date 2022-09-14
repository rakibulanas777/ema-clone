import React, { useEffect, useState } from "react";
import Catagory from "../Shared/Catagory";
import Filter from "./Filter";
import Product from "./Product";

const Home = ({ button }) => {
	const [value, setValue] = useState([]);
	useEffect(() => {
		fetch("../../ama.json")
			.then((res) => res.json())
			.then((data) => setValue(data));
	}, []);
	//console.log(value.name);
	const filterItem = (categItem) => {
		const updatedItems = value.filter((curElem) => {
			return curElem.category === categItem;
		});
		setValue(updatedItems);
	};
	return (
		<div className="cart">
			<div className="container py-14 mx-auto">
				<Catagory filterElem={filterItem} products={value} />
				<div className="grid grid-cols-3 gap-4">
					<Filter />
					<div className="grid grid-cols-3 col-span-2 gap-4">
						{value.map((product) => (
							<Product products={product} handleBtn={button} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
