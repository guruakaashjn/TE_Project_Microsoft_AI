import React from "react";
import createPlotlyComponent from "react-plotly.js/factory";
const Plotly = window.Plotly;
const Plot = createPlotlyComponent(Plotly);

const LinePlot = ({ actual, predicted, state, label, model }) => {
	const data = [actual, predicted];
	return (
		<div className="linePlot">
			<Plot
				data={data}
				layout={{
					title: { text: `${label}${state}: ${model}` },
					autosize: true,
					xaxis: { title: "Years" },
					yaxis: { title: "Plastic Production" },
				}}
				useResizeHandler
				style={{ width: "100%", height: "100%" }}
			/>
		</div>
	);
};

export default LinePlot;
