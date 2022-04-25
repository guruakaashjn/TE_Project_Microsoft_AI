import React from "react";
import Header from "../components/Header";

const Visualisation = ({ home }) => {
	// const tokenType = console.log(process.env.REACT_APP_ACCESSTOKEN);
	return (
		<div className="visualisation">
			<Header home={home} />
			<div className="visualisation__frame">
				<iframe
					title="MicrosoftAIForEarth"
					width="100%"
					height="650px"
					src="https://app.powerbi.com/reportEmbed?reportId=8f7ea88a-79a6-41ff-b933-5a45df3e6177&autoAuth=true&ctid=cca3f0fe-586f-4426-a8bd-b8146307e738&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWluZGlhLXdlc3QtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQvIn0%3D"
					frameBorder={0}
					allowFullScreen={true}
				></iframe>{" "}
			</div>
		</div>
	);
};

export default Visualisation;
