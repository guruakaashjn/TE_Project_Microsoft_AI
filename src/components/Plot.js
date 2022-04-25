import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/Plot.css";
import "../css/Footer.css";
import Header from "../components/Header";
import Footer from "./Footer";
import Dropdown from "../components/Dropdown";
import createPlotlyComponent from "react-plotly.js/factory";
const Plotly = window.Plotly;
const Plot = createPlotlyComponent(Plotly);

const Plotgraph = ({ home }) => {
	const [plotData, setPlotData] = useState([]);
	const [currentOption, setCurrentOption] = useState("");
	const [data, setData] = useState([]);
	const [layout, setLayout] = useState({});

	console.log(currentOption);
	useEffect(() => {
		const url = "http://localhost:8000";
		const config = {
			//http://localhost/3000
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
		};
		const path = {
			choropleth: "/choropleth",
			"recycling-plants": "recycling-plant",
			"ulb-wise": "ulb-wise/scatterplot",
			"state-wise": "state-wise/scatterplot",
		};

		try {
			const getPlotData = async () => {
				const response = await axios.get(
					`${url}/api/${path[currentOption]}`,
					config
				);
				// console.log(response.data);
				if (response.status === 200) {
					// console.log(response.data);
					// console.log(response.data.latitude);
					// console.log(response.data.longitude);
					setPlotData(response.data);
					const commondata = {
						type: "scattermapbox",
						lon: response.data.longitude,
						lat: response.data.latitude,
						mode: "markers",
					};

					const commonlayout = {
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
					};

					if (currentOption === "recycling-plants") {
						setData([
							{
								...commondata,
								recyclingName: response.data.recyclingName,
								materialsAccepted: response.data.materialsAccepted,
								recycledProducts: response.data.recycledProducts,
								marker: {
									symbol: "marker",
									size: 10,
									color: "green",
								},
								hovertemplate:
									"<b>Latitude</b>: %{lat}" +
									"<br><b>Longitude</b>: %{lon}<br>",
							},
						]);
						setLayout({
							title: "Recycling Units In India",
							...commonlayout,
						});
					} else if (currentOption === "state-wise") {
						setData([
							{
								...commondata,
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
							...commonlayout,
							zoom: 6,
						});
					}
				}
			};
			getPlotData();
		} catch (error) {
			console.log(error);
		}
	}, [currentOption]);

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

	return (
		<>
			<Header home={home} />

			<div className="Plotgraph">
				<div className="Plotgraph__header">
					<h3 className="Plotgraph__title">
						<span>~</span>Recycling Plants{" "}
					</h3>
					<Dropdown setCurrentOption={setCurrentOption} options={options} />
				</div>

				{currentOption ? (
					<Plot
						className="Plotgraph__plot"
						data={data}
						layout={layout}
						config={config}
					/>
				) : (
					<div
						style={{ width: 1000, height: 600, margin: "3rem auto" }}
						className="Plotgraph__plot"
					>
						<h3> Please select an option </h3>
					</div>
				)}
				<section id="Landing__footer">
					<div className="footer__container">
						<Footer />
					</div>
				</section>
			</div>
		</>
	);
};

export default Plotgraph;
