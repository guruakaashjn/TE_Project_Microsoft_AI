import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect({ options }) {
	const [option, setOption] = useState("");

	const handleChange = (event) => {
		setOption(event.target.value);
	};

	return (
		<Box sx={{ minWidth: 120 }}>
			<FormControl fullWidth>
				<InputLabel id="demo-simple-select-label">
					Choose visualisation
				</InputLabel>
				<Select
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					value={option}
					label="choose-visualisation"
					onChange={handleChange}
				>
					{Object.keys(options).forEach((option) => {
						return <MenuItem value={option}>options[option]</MenuItem>;
					})}
					{/* <MenuItem value={20}>Twenty</MenuItem>
					<MenuItem value={30}>Thirty</MenuItem> */}
				</Select>
			</FormControl>
		</Box>
	);
}
