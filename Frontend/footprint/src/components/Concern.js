import React from "react";
import "../css/Concern.css";
import unsplash from "../video/naja-bertolt-jensen-FxnqdmKBJps-unsplash.jpg";
import UnoConference from "../video/uno_conference.jpg";
import irreversible from "../video/irreversible";
import DustonWoodhouse from "../video/dustan-woodhouse-RUqoVelx59I-unsplash(1).jpg";
import Articles from "./Articles";

const Concern = () => {
	return (
		<div className="concern">
			<h3 className="concern__title">
				{" "}
				<span>~</span> Read Latest Concerns
			</h3>

			<div className="concern__articlebox">
				<div className="concern__left">
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
				</div>
				<div className="concern__center">
					<div className="concern__articlebox">
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
					</div>
				</div>
				<div className="concern__right">
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
					<Articles />
				</div>
			</div>
		</div>
	);
};

export default Concern;
