import React from "react";

const Product = ({ products, handleBtn }) => {
	return (
		<div className="shadow-md bg-white rounded-md p-6">
			<img src={products.img} alt="" className="mb-2 rounded" />
			<div className="text-2xl text-center text-blue-900 mb-2 font-semibold">
				Price : ${products.price}
			</div>
			<button
				className="btn btn-primary w-full"
				onClick={() => handleBtn(products)}
			>
				Add to cart
			</button>
		</div>
	);
};

export default Product;
