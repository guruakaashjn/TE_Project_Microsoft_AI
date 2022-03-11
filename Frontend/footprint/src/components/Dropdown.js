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
		<Box className="Dropdown" sx={{ minWidth: 200 }}>
			<FormControl className="Dropdown__formControl" fullWidth>
				<InputLabel id="demo-simple-select-label" sx={{ color: "#ffc947" }}>
					Choose visualisation
				</InputLabel>
				<Select
					sx={{ borderColor: "#ffc947" }}
					className="Dropdown__select"
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					value={option}
					label="choose-visualisation"
					onChange={handleChange}
				>
					{Object.keys(options).map((option) => {
						return <MenuItem value={option}>{options[option]}</MenuItem>;
					})}
					{/* <MenuItem value={20}>Twenty</MenuItem>
					<MenuItem value={30}>Thirty</MenuItem> */}
				</Select>
			</FormControl>
		</Box>
	);
}
