import React, { useState, useEffect } from "react";
import axios from "axios";
import createPlotlyComponent from "react-plotly.js/factory";
const Plotly = window.Plotly;
const Plot = createPlotlyComponent(Plotly);

const PiePlot = ({ currentModel, year }) => {
	const [pieData, setPieData] = useState({});
	console.log(year);
	useEffect(() => {
		const url = "http://localhost:8000";
		const config = {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
		};

		try {
			const getRandomForest = async () => {
				const response = await axios.get(
					`${url}/api/get-data/models/rf-state/?year=${year}`,
					config
				);

				if (response.status === 200) {
					console.log(response.data);
					setPieData(response.data);
				}
			};

			const getCatBoost = async () => {
				const response = await axios.get(
					`${url}/api/get-data/models/cb-state/?year=${year || 2020}`,
					config
				);

				if (response.status === 200) {
					console.log(response.data);
					setPieData(response.data);
				}
			};

			if (currentModel === "CatBoost Regression") {
				getCatBoost();
			} else {
				getRandomForest();
			}
		} catch (error) {
			console.log(error);
		}
	}, [currentModel, year]);

	useEffect(() => {
		console.log(pieData);
	}, [pieData]);

	const data = [
		{
			type: "pie",
			values: pieData.data,
			labels: pieData.states,
			textinfo: "label+percent",
			textposition: "inside",
			automargin: true,
		},
	];

	const layout = {
		height: 500,
		width: "50%",
	};

	return (
		<div className="PiePlot">
			<Plot data={data} layout={layout} />
		</div>
	);
};

export default PiePlot;
