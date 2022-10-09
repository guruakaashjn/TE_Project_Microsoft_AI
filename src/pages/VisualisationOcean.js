import React from "react";
import Header from "../components/Header";

const Visualisation = ({ home }) => {
	// const tokenType = console.log(process.env.REACT_APP_ACCESSTOKEN);
	return (
		<div className="visualisation">
			<Header home={home} />
			<br></br>
			<div className="visualisation__frame">
				{
				<iframe title="Report Section" 
				width="100%"
				height="800px" 
				src="https://app.powerbi.com/view?r=eyJrIjoiNDZmZTk5NjYtNWJkZS00YzEyLThjY2MtMjBkYjM5ZWZlOWQ2IiwidCI6ImNjYTNmMGZlLTU4NmYtNDQyNi1hOGJkLWI4MTQ2MzA3ZTczOCJ9" 
				frameborder="0" 
				allowFullScreen="true"></iframe>}
			</div>
		</div>
	);
};

export default Visualisation;
