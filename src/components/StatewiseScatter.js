import React, { useState, useEffect } from "react";
import axios from "axios";
import createPlotlyComponent from "react-plotly.js/factory";
const Plotly = window.Plotly;
const Plot = createPlotlyComponent(Plotly);

const StatewiseScatter = ({ home }) => {
	// const [plotData, setPlotData] = useState([]);
	const [data, setData] = useState([]);
	const [layout, setLayout] = useState({});

	useEffect(() => {
		const url = "https://plasticlessindia.azurewebsites.net/";
		const config = {
			//http://localhost/3000
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
		};

		try {
			const getPlotData = async () => {
				const response = await axios.get(
					`${url}/api/state-wise/scatterplot`,
					config
				);
				// console.log(response.data);
				if (response.status === 200) {
					console.log(response.data);
					setData([
						{
							type: "scattermapbox",
							lon: response.data.longitude,
							lat: response.data.latitude,
							mode: "markers",

							markers: {
								size: 40,
								color: response.data.color,
								opacity: 0.6,
							},
							text: response.data.plastic_amount,
							hovertemplate:
								"<b>Plastic Amount</b>: %{text}" +
								"<br><b>Latitude</b>: %{lat}" +
								"<br><b>Longitude</b>: %{lon}<br>",
							hoverinfo: "text",
						},
					]);

					setLayout({
						title: "State-Wise Plastic waste",
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
							zoom: 6,
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

	const config = {
		mapboxAccessToken:
			"pk.eyJ1IjoibWFuaTIwMDIiLCJhIjoiY2wwbDZiMDM0MHRiaTNjbTl3ejFzcW1nZCJ9.7nz-xKS_PxZsh5G6TKHgCg",
	};

	return (
		<div>
			<Plot
				className="Plotgraph__plot"
				data={data}
				layout={layout}
				config={config}
			/>
		</div>
	);
};

export default StatewiseScatter;
