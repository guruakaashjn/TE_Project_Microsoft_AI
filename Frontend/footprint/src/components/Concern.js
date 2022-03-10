import React from "react";
import "../css/Concern.css";
import Articles from "./Articles";

const Concern = () => {
	return (
		<div className="concern">
			<h3 className="concern__title">
				{" "}
				<span>~</span> Read Latest Concerns..!
			</h3>

			<div className="concern__articlebox">
				<div className="concern__left">
					<Articles
						title={"The Dangers of Plastic Pollution"}
						content={
							"2020 has been a year of stark realities. Among these stark realities is the recognition that our environment—in fact, the health of the planet we call home—is in danger...."
						}
						link={
							"https://www.nrdc.org/experts/dillon-hanson-ahumada/dangers-plastic-pollution"
						}
						// image={placeholder}
					/>
					<Articles />
				</div>
				<div className="concern__center">
					<div className="concern__articlebox">
						<Articles
							title={"Plastic Pollution Deal"}
							content={
								"More than 170 nations across the globe have backed a historic UN resolution to end plastic pollution, with an international legally binding agreement to be in place by 2024...."
							}
							link={
								"https://www.forbes.com/sites/jamiehailstone/2022/03/02/plastic-pollution-deal-marks-a-triumph-by-planet-earth/?sh=3c1a5fea28a2"
							}
						/>
					</div>
				</div>
				<div className="concern__right">
					<Articles />
					<Articles />
				</div>
			</div>
		</div>
	);
};

export default Concern;
