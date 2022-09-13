import React from "react";

const Cart = ({ cart }) => {
	let total = 0;
	for (const product of cart) {
		total = total + product.price * product.quantity;
	}
	return (
		<div className="cart bg-slate-200">
			<div className="container mx-auto py-14">
				<div className="cart bg-white p-10 mx-auto w-11/12 shadow-sm rounded-sm">
					<div className="overflow-x-auto">
						<table className="table w-full bg-white">
							<thead>
								<tr>
									<th>Descriptions</th>
									<th>quantity</th>
									<th>price</th>
								</tr>
							</thead>
							<tbody>
								{cart.map((item) => (
									<tr>
										<td>
											<div className="flex gap-4 content-center">
												<img src={item.img} alt="" className="img-fluid w-10" />
												<div className="text capitalize">{item.name}</div>
											</div>
										</td>
										<td>
											<div className="flex gap-4 content-center">
												<button className="btn btn-sm text-xl font-bold text-white">
													+
												</button>
												<div className="text-xl font-bold">{item.quantity}</div>
												<button className="btn btn-sm text-xl font-bold text-white">
													-
												</button>
											</div>
										</td>
										<td>{item.price * item.quantity}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
