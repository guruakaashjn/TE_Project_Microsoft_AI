import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Typography from "@mui/material/Typography";
import "../css/Landing.css";
import landingClip from "../video/landing_clip.gif";
import Concern from "../components/Concern";

const Landing = () => {
	return (
		<div className="landing">
			<section id="landing__top">
				<div className="landing__container">
					<img className="landing__clip" src={landingClip} alt="Landing-clip" />
					<Navbar />
					{/* <Header navbar={true} /> */}
					<div className="Landing__content">
						<div className="Navbar__contentright">
							<Typography variant="h2">
								{" "}
								There is no planet <span>"B"</span>{" "}
							</Typography>
						</div>
						<div className="Navbar__contentleft"></div>
					</div>
				</div>
			</section>

			<section id="landing__concern">
				<Concern />
			</section>
		</div>
	);
};

export default Landing;
