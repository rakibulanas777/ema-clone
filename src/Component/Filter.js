import React from "react";
import { useState } from "react";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";

const Filter = () => {
	const minNum = 0;
	const maxNum = 100;
	const [range, getRange] = useState(0);
	const rangeOnChange = (value) => {
		value = range + 10;
		getRange(value);
	};

	return (
		<div className="filter">
			<div className="p-6  shadow-sm bg-white rounded-sm">
				<div className="text-2xl text-slate-900 pb-4">Price Range</div>
				<Slider
					min={minNum}
					max={maxNum}
					step={10}
					value={range}
					onChange={rangeOnChange}
				/>
			</div>
		</div>
	);
};

export default Filter;
