import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect({ options, setCurrentOption }) {
	const [option, setOption] = useState("");

	const handleChange = (event) => {
		setOption(event.target.value);
		setCurrentOption(event.target.value);
	};

	return (
		<Box className="Dropdown" sx={{ minWidth: 200, color: "white" }}>
			<FormControl
				className="Dropdown__formControl"
				fullWidth
				sx={{ borderColor: "white" }}
			>
				<InputLabel
					id="demo-simple-select-label"
					sx={{ color: "white", borderColor: "white" }}
				>
					Choose visualisation
				</InputLabel>
				<Select
					sx={{
						borderColor: "white",
						backgroundColor: "#050706",
						color: "white",
					}}
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
