import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const Table = ({ row }) => {
	const year = 2020;
	const states = [
		"Andaman and Nicobar Islands",
		"Andhra Pradesh",
		"Arunachal Pradesh",
		"Assam",
		"Bihar",
		"Chandigarh",
		"Chhattisgarh",
		"Dadra and Nagar Haveli and Daman and Diu",
		"Delhi",
		"Goa",
		"Gujarat",
		"Haryana",
		"Himachal Pradesh",
		"Jammu and Kashmir",
		"Jharkhand",
		"Karnataka",
		"Kerala",
		"Lakshadweep",
		"Madhya Pradesh",
		"Maharashtra",
		"Manipur",
		"Meghalaya",
		"Mizoram",
		"Nagaland",
		"Odisha",
		"Puducherry",
		"Punjab",
		"Rajasthan",
		"Sikkim",
		"Tamil Nadu",
		"Telangana",
		"Tripura",
		"Uttar Pradesh",
		"Uttarakhand",
		"West Bengal",
	];

	const plastic = [
		387.9723, 46472.92, 2748.0836, 25243.0705, 41978.3428, 6825.7668,
		33288.3491, 1829.1079, 234906.5935, 26236.9436, 413739.7812, 149816.1329,
		13770.9153, 75408.57, 43947.7177, 298729.5481, 132079.668, 46, 122752.7343,
		447863.1016, 8375.6367, 5092.9306, 7988.4209, 570.7679, 45687.0901,
		12016.7636, 93634.634, 52641.0135, 69.7263, 433486.7084, 235240.5675,
		32.3198, 163261.7717, 25493.6998, 302121.9627,
	];

	const rows = [];

	for (let index = 0; index < states.length; index++) {
		const data = {
			id: index,
			year: year,
			state: states[index],
			plastic: plastic[index],
		};
		rows.push(data);
	}

	console.log(rows[0]);

	// const [data, setData] = useState(rows);

	const columns = [
		{ field: "year", headerName: "Year", sortable: false, width: 70 },
		{ field: "state", headerName: "Region name", sortable: true, width: 200 },
		{
			field: "plastic",
			headerName: "Plastic Produced(TPA)",
			sortable: true,
			type: "number",
			width: 200,
		},
	];

	return (
		<div className="table" style={{ width: "50%" }}>
			<DataGrid
				style={{
					display: "flex",
					justifyContent: "center",
					width: "100%",
					height: "500px",
				}}
				className="table__grid"
				rows={row.rows || rows}
				columns={columns}
				pageSize={10}
				rowsPerPageOptions={[10]}
			/>
		</div>
	);
};

export default Table;

//npm i @mui/x-data-grid
