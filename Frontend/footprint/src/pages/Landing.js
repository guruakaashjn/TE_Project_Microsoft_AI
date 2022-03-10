import React from "react";
import Header from "../components/Header";
import "../css/Landing.css";
import landingClip from "../video/ezgif.com-gif-maker(1).gif";
import Concern from "../components/Concern";

const Landing = () => {
	return (
		<div className="landing">
			<div className="landing__navbarclip">
				<Header />
				{/* <h1>hello</h1> */}
				<img className="landing__clip" src={landingClip} alt="Landing-clip" />
			</div>
			<section id="landing__concern">
				<Concern />
			</section>
		</div>
	);
};

export default Landing;
