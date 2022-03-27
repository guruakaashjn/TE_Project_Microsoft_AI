import React from "react";
import Header from "../components/Header";
import Typography from "@mui/material/Typography";
import "../css/Landing.css";
import landingClip from "../video/ocean-4920792_1920.jpg";
import Concern from "../components/Concern";
import Footer from "../components/Footer";

const Landing = ({ home }) => {
	return (
		<div className="landing">
			<section id="landing__top">
				<div className="landing__container">
					<img className="landing__clip" src={landingClip} alt="Landing-clip" />
					{/* <Navbar /> */}
					<Header home={home} />
					<div className="Landing__content">
						<div className="content">
							<Typography
								variant="h1"
								sx={{
									fontFamily: '"Merriweather", serif',
									my: 1,
									textShadow: "1px 1px 2px black",
								}}
							>
								{" "}
								There is no planet
								<span>"B"</span>{" "}
							</Typography>

							<Typography
								variant="h4"
								sx={{
									fontFamily: '"Merriweather", serif',
									my: 1,
									fontSize: "2rem",
									textShadow: "1px 1px 2px black",
								}}
							>
								The greatest threat to humanity is the belief that someone else
								will save it!
							</Typography>
						</div>
					</div>
				</div>
			</section>

			<section id="Landing__concern">
				<div className="concern__container">
					<Concern />
				</div>
			</section>

			<section id="Landing__footer">
				<div className="footer__container">
					<Footer />
				</div>
			</section>
		</div>
	);
};

export default Landing;
