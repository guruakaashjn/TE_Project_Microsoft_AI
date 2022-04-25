import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "../css/Dropdown.css"

export default function SelectLabels({ labels, label, setVariable }) {
	const [option, setOption] = useState("");
	const handleChange = (event) => {
		setOption(event.target.value);
		setVariable(event.target.value);
	};
	console.log(labels);

	return (
		<div>
			<FormControl sx={{ m: 1, minWidth: 120 }}>
				<Select value={option} onChange={handleChange} displayEmpty>
					<MenuItem value="">
						<em>{label}</em>
					</MenuItem>
					{Object.keys(labels).map((label) => (
						<MenuItem key={label} value={labels[label]}>
							{label}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	);
}
