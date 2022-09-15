import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
const Navbar = ({ cart }) => {
	let total = 0;
	let shipping = 0;
	let quantity = 0;
	for (const product of cart) {
		quantity = quantity + product.quantity;
		total = total + product.price * product.quantity;
		shipping = shipping + product.shipping;
	}
	const tax = parseFloat((total * 0.1).toFixed(2));
	const grandTotal = total + shipping + tax;

	return (
		<div className="navbar shadow-md bg-stone-50 sticky">
			<div className="flex-1">
				<Link to="/" className="btn btn-ghost normal-case text-xl">
					ema clone
				</Link>
			</div>
			<div className="flex-none gap-4">
				<label
					className="btn btn-primary bg-gradient-to-r from-secondary to-primary"
					htmlFor="my-modal-3"
				>
					login
				</label>
				<label
					className="btn btn-primary bg-gradient-to-r from-secondary to-primary"
					htmlFor="my-modal-4"
				>
					Register
				</label>
				<div className="dropdown dropdown-end">
					<label tabIndex={0} className="btn btn-ghost btn-circle">
						<div className="indicator">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
								/>
							</svg>
							<span className="badge badge-sm indicator-item">{quantity}</span>
						</div>
					</label>
					<div
						tabIndex={0}
						className="mt-3 card card-compact dropdown-content w-52 bg-slate-200 shadow"
					>
						<div className="card-body">
							<span className="font-bold text-lg">{quantity}</span>
							<span className="text-info">Price : {grandTotal}</span>
							<div className="card-actions">
								{cart.length && (
									<Link to="/cart">
										<button className="btn btn-primary btn-block">
											View cart
										</button>
									</Link>
								)}
							</div>
						</div>
					</div>
				</div>
				<div className="dropdown dropdown-end">
					<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
						<div className="w-10 rounded-full">
							<img src="https://placeimg.com/80/80/people" />
						</div>
					</label>
					<ul
						tabIndex={0}
						className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52"
					>
						<li>
							<a className="justify-between">
								Profile
								<span className="badge">New</span>
							</a>
						</li>
						<li>
							<a>Settings</a>
						</li>
						<li>
							<a>Logout</a>
						</li>
					</ul>
				</div>
			</div>
			<input type="checkbox" id="my-modal-3" className="modal-toggle" />
			<div className="modal z-10">
				<div className="modal-box relative">
					<label
						htmlFor="my-modal-3"
						className="btn btn-sm btn-circle absolute right-2 top-2"
					>
						✕
					</label>
					<input
						type="text"
						placeholder="Type here"
						className="input w-full mb-3 font-medium bg-accent mt-10 "
					/>
					<input
						type="text"
						placeholder="Type here"
						className="input w-full font-medium mb-3 bg-accent"
					/>
					<button
						type="submit"
						className="btn btn-primary text-white w-full bg-gradient-to-r from-secondary to-primary"
					>
						logIn
					</button>
				</div>
			</div>
			<input type="checkbox" id="my-modal-4" className="modal-toggle" />
			<div className="modal z-10">
				<div className="modal-box relative">
					<label
						htmlFor="my-modal-4"
						className="btn btn-sm btn-circle absolute right-2 top-2"
					>
						✕
					</label>
					<input
						type="text"
						placeholder="Type here"
						className="input w-full mb-3 font-medium bg-accent mt-10 "
					/>
					<input
						type="text"
						placeholder="Type here"
						className="input w-full font-medium mb-3 bg-accent"
					/>
					<button
						type="submit"
						className="btn btn-primary text-white w-full bg-gradient-to-r from-secondary to-primary"
					>
						logIn
					</button>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
