import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/Plot.css";
import Header from "../components/Header";
import Dropdown from "../components/Dropdown";
import createPlotlyComponent from "react-plotly.js/factory";
const Plotly = window.Plotly;
const Plot = createPlotlyComponent(Plotly);

const Plotgraph = ({ home }) => {
	const [plotData, setPlotData] = useState([]);
	const [data, setData] = useState([]);
	const [layout, setLayout] = useState({});

	useEffect(() => {
		const url = "http://localhost:8000";
		const config = {
			//http://localhost/3000
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
		};

		try {
			const getPlotData = async () => {
				const response = await axios.get(`${url}/api/recycling-plant`, config);
				// console.log(response.data);
				if (response.status === 200) {
					console.log(response.data);
					console.log(response.data.latitude);
					console.log(response.data.longitude);
					// const jsonData = JSON.parse(response.data);
					// console.log(jsonData);
					setPlotData(response.data);
					setData([
						{
							type: "scattermapbox",
							lon: response.data.longitude,
							lat: response.data.latitude,
							mode: "markers",
							recyclingName: response.data.recyclingName,
							materialsAccepted: response.data.materialsAccepted,
							recycledProducts: response.data.recycledProducts,
							marker: {
								symbol: "marker",
								size: 10,
								color: "green",
							},
							hovertemplate:
								"<b>Latitude</b>: %{lat}" + "<br><b>Longitude</b>: %{lon}<br>",
							// 	+ `<b>Recycled Products</b>: %{recycledProducts}<br>`,
							// text:
							//   "<b>" +
							//   "Recycling Unit Name: " +
							//   "</b>" +
							//   response.data.recyclingName +
							//   "<br>" +
							//   "<b>" +
							//   "Materials Accepted: " +
							//   "</b>" +
							//   response.data.materialsAccepted +
							//   "<br>" +
							//   "<b>" +
							//   "Recycled Products: " +
							//   "</b>" +
							//   response.data.recycledProducts,
							// hoverinfo: "text",
							// z: z,
						},
					]);

					setLayout({
						title: "Recycling Units In India",
						autosize: false,
						width: 1000,
						height: 600,
						hovermode: "closest",
						showlegend: false,
						mapbox: {
							bearing: 0,
							center: {
								lat: 19.0,
								lon: 75.0,
							},
							pitch: 0,
							zoom: 4,
							style: "light",
						},
					});
				}
			};
			getPlotData();
		} catch (error) {
			console.log(error);
		}
	}, []);

	// console.log(data);

	const config = {
		mapboxAccessToken:
			"pk.eyJ1IjoibWFuaTIwMDIiLCJhIjoiY2wwbDZiMDM0MHRiaTNjbTl3ejFzcW1nZCJ9.7nz-xKS_PxZsh5G6TKHgCg",
	};

	const options = {
		"recycling-plants": "Recycling Plants",
		choropleth: "Choropleth map",
		"ulb-wise": "ULB wise Scatter plot",
		"state-wise": "State wise Scatter plot",
	};
	// console.log(config);
	// console.log(layout);

	return (
		<>
			<Header home={home} />
			<div className="Plotgraph">
				<div className="Plotgraph__header">
					<Dropdown options={options} />
					<h3 className="Plotgraph__title">
						<span>~</span>Recycling Plants{" "}
					</h3>
				</div>

				<Plot
					className="Plotgraph__plot"
					data={data}
					layout={layout}
					config={config}
				/>
			</div>
		</>
	);
};

export default Plotgraph;
