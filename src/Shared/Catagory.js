import React from "react";

const Catagory = ({ filterElem, products }) => {
	return (
		<div className="catagory-btn">
			<div className=" mx-auto py-7">
				<div className="flex flex-wrap gap-4">
					<button
						className="btn btn-primary"
						onClick={() => filterElem(products)}
					>
						All
					</button>
					<button
						className="btn btn-primary"
						onClick={() => filterElem("shoes")}
					>
						shoes
					</button>

					<button className="btn btn-primary">Jeans</button>
					<button
						className="btn btn-primary"
						onClick={() => filterElem("t-shirts")}
					>
						T-Shirt
					</button>
					<button className="btn btn-primary">bags</button>
					<button className="btn btn-primary">caps</button>
					<button className="btn btn-primary">caps</button>
				</div>
			</div>
		</div>
	);
};

export default Catagory;
