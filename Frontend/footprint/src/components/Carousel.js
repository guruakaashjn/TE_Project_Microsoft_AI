import React from "react";
import Slider from "react-slick";
import unsplash from "../video/naja-bertolt-jensen-FxnqdmKBJps-unsplash.jpg";
import UnoConference from "../video/uno_conference.jpg";
import microplastics from "../video/microplastic.jpg";
import irreversible from "../video/irreversible";
import DustonWoodhouse from "../video/dustan-woodhouse-RUqoVelx59I-unsplash(1).jpg";
import Articles from "./Articles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import "../css/Carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
	<ArrowForwardIosIcon
		className="Carousel__icon"
		fontSize="large"
		sx={{
			color: "#050706",
		}}
	/>
);

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
	<ArrowBackIosNewIcon
		className="Carousel__icon"
		fontSize="large"
		sx={{
			color: "#050706",
		}}
	/>
);

const Carousel = () => {
	// const slickRef = useRef(null);
	const options = {
		dots: true,
		centerMode: true,
		centerPadding: 0,
		nextArrow: <SlickArrowRight />,
		prevArrow: <SlickArrowLeft />,
		// centerPadding: "60px",
		slidesToShow: 3,
		// useCSS: true,
		arrows: true,
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: "40px",
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: "40px",
					slidesToShow: 1,
				},
			},
		],
	};

	return (
		<div className="Carousel">
			{/* {renderArrows} */}
			<Slider {...options}>
				<Articles
					title={"The Dangers of Plastic Pollution"}
					content={
						"2020 has been a year of stark realities. Among these stark realities is the recognition that...."
					}
					image={DustonWoodhouse}
					link={
						"https://www.nrdc.org/experts/dillon-hanson-ahumada/dangers-plastic-pollution"
					}
					// image={placeholder}
				/>
				<Articles
					title={"Impact of Plastic on Marine Ecosystem"}
					link={
						"https://www.iucn.org/resources/issues-briefs/marine-plastic-pollution#:~:text=Impacts%20on%20marine%20ecosystems,stomachs%20become%20filled%20with%20plastic."
					}
					content={
						"The most visible impacts of plastic debris are the ingestion, suffocation and entanglement of hundreds of marine species...."
					}
					image={unsplash}
				/>
				<Articles
					title={"Plastic Pollution Deal"}
					content={
						"More than 170 nations across the globe have backed a historic UN resolution to end plastic pollution, with an international legally binding agreement to be in place by 2024...."
					}
					image={UnoConference}
					link={
						"https://www.forbes.com/sites/jamiehailstone/2022/03/02/plastic-pollution-deal-marks-a-triumph-by-planet-earth/?sh=3c1a5fea28a2"
					}
				/>
				<Articles
					title={"Global plastic pollution "}
					link={
						"https://economictimes.indiatimes.com/news/environment/pollution/global-plastic-pollution-may-be-nearing-irreversible-tipping-point/articleshow/84111708.cms"
					}
					image={irreversible}
					content={
						"Plastic emissions are trending upward even though awareness about plastic pollution among scientists and the public has increased significantly in recent years...."
					}
				/>
				<Articles
					image={microplastics}
					title={"14 million tonnes of microplastics on sea"}
					content={
						"The world's sea floor is littered with an estimated 14 million tonnes of microplastics, broken down from the masses...."
					}
				/>
			</Slider>
		</div>
	);
};

export default Carousel;
