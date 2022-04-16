import React from "react";
import Header from "../components/Header";
import Typography from "@mui/material/Typography";
import "../css/Landing.css";
import "../App.css";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";

const Landing = ({ home }) => {
	return (
		<div className="landing">
			<section id="landing__top">
				<div className="landing__container">
					<Header home={home} />
					<div className="Landing__content">
						<div className="content">
							<Typography
								variant="h1"
								className="Landing__Typography__header"
								sx={{
									fontFamily: '"Merriweather", serif',
								}}
							>
								{" "}
								There is no planet
								<span>"B"</span>{" "}
							</Typography>

							<Typography
								variant="h4"
								className="Landing__Typography__body"
								sx={{
									fontFamily: '"Merriweather", serif',
								}}
							>
								The greatest threat to humanity is the belief that someone else
								will save it!
							</Typography>
						</div>
					</div>
				</div>
			</section>

			{/* <section id="Landing__concern">
				<div className="concern__container">
					<Concern />
				</div>
			</section> */}

			<section id="Landing__news">
				<Carousel />
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
