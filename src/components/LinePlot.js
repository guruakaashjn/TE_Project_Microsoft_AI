/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import axios from "axios";
import createPlotlyComponent from "react-plotly.js/factory";
const Plotly = window.Plotly;
const Plot = createPlotlyComponent(Plotly);

const LinePlot = () => {
	const [polynomialData, setPolynpolynomialData] = useState({});
	const [traceActual, setTraceActual] = useState({});
	const [tracePredict, setTracePredict] = useState({});

	useEffect(() => {
		const url = "http://localhost:8000";
		const config = {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
		};

		try {
			const getPolynomialData = async () => {
				const response = await axios.get(
					`${url}/api/get-data/polynomial/`,
					config
				);

				if (response.status === 200) {
					console.log(response.data);
					setPolynpolynomialData(response.data);
				}
			};
			getPolynomialData();
		} catch (error) {
			console.log(error);
		}
	}, []);

	useEffect(() => {
		setTraceActual({
			x: polynomialData.yearActual,
			y: polynomialData.dataActual,
			type: "scatter",
			name: "Actual Data",
		});
		// Important;
		// console.log(traceActual);
		// console.log(tracePredict);
	}, [polynomialData]);

	useEffect(() => {
		console.log(polynomialData);
		setTracePredict({
			x: polynomialData.yearPredict,
			y: polynomialData.dataPredict,
			type: "lines+markers",
			name: "Predicted Data",
		});
	}, [polynomialData]);

	const data = [traceActual, tracePredict];
	console.log(data);
	const layout = {
		title: { text: `Country-wise Polynomial Regression` },
		autosize: true,
		xaxis: {
			title: "Year",
		},
		yaxis: {
			title: "Plastic Prediction",
		},
	};

	return (
		<div className="linePlot">
			{/* // Polynomial Regression chart */}
			<Plot
				data={data}
				layout={layout}
				useResizeHandler
				style={{ width: "100%", height: "100%" }}
			/>
		</div>
	);
};

export default LinePlot;
