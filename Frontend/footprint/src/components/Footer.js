import React from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../css/Footer.css";

const Footer = () => {
	return (
		<div className="Footer">
			<div className="Footer__container">
				<div className="FooterContainer__top">
					<div className="Footer__left">
						<Typography
							className="Footer__Typography__header"
							variant="h2"
							noWrap
							component="div"
						>
							Plastic Footprint
						</Typography>
						<Typography
							className="Footer__Typography__body"
							variant="body"
							component="div"
						>
							Plastic Footprint is a collaborative project done by students of
							VESIT (D12A & D12C) to calculate the plastic footprint of India. This
							project aims to calculate and predict the plastic footprint for
							next 5 years.
						</Typography>
					</div>

					<div className="Footer__center">
						<Typography
							className="Footer__Typography__header"
							variant="h2"
							noWrap
							component="div"
							sx={{
								justifyContent: "center",
							}}
						>
							Connect with us
						</Typography>
						<div className="Footer__icons">
							<Link to="/">
								<TwitterIcon fontSize="large" sx={{ mx: 2 }} />
							</Link>
							<Link to="/">
								<InstagramIcon fontSize="large" sx={{ mx: 2 }} />
							</Link>
							<Link to="/">
								<GitHubIcon fontSize="large" sx={{ mx: 2 }} />
							</Link>
						</div>
					</div>

					<div className="Footer__right">
						<Typography
							className="Footer__Typography__header"
							variant="h2"
							noWrap
							component="div"
							sx={{
								justifyContent: "center",
							}}
						>
							Contact Us
						</Typography>
						<div className="Footer__links">
							<a
								href="https://www.linkedin.com/in/ajay-nair-837986155"
								target="_blank"
								rel="noreferrer"
							>
								Ajay Nair
							</a>
							<a
								href="https://www.linkedin.com/in/guru-akaash-janthalur-n-5262101b9/"
								target="_blank"
								rel="noreferrer"
							>
								Guru Akaash Janthalur
							</a>
							<a
								href="https://www.linkedin.com/in/manigandan-kasimani-537964213/?_l=en_US"
								target="_blank"
								rel="noreferrer"
							>
								Manigandan Kasimani
							</a>
							<a
								href="https://www.linkedin.com/in/varun-tripathy-70934921b"
								target="_blank"
								rel="noreferrer"
							>
								Varun Tripathy
							</a>
							<a
								href="https://www.linkedin.com/in/manasvi-patwa-6189761a0"
								target="_blank"
								rel="noreferrer"
							>
								Manasvi Patwa
							</a>
							<a
								href="https://www.linkedin.com/in/bhavika-chattani-3428a71b2"
								target="_blank"
								rel="noreferrer"
							>
								Bhavika Chattani
							</a>
							<a
								href="https://www.linkedin.com/in/varnit-batheja-106692252/"
								target="_blank"
								rel="noreferrer"
							>
								Varnit Batheja
							</a>
							<a
								href="https://www.linkedin.com/in/sahil-deshmukh-5b8195191/"
								target="_blank"
								rel="noreferrer"
							>
								Sahil Deshmukh
							</a>
						</div>
					</div>
				</div>

				<div className="FooterContainer__bottom">
					&copy; Plastic Footprint 2022. All rights reserved.
				</div>
			</div>
		</div>
	);
};

export default Footer;
