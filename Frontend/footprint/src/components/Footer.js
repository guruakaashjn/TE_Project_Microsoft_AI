import React from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../css/Footer.css";

const Footer = () => {
	return (
		<div className="Footer">
			<div className="Footer__container">
				<div className="FooterContainer__top">
					<div className="Footer__left">
						<Typography
							variant="h2"
							noWrap
							component="div"
							sx={{
								mr: 2,
								my: 2,
								fontFamily: "'Merienda', cursive",
								fontSize: "28px",
								fontWeight: "700",
								display: { xs: "none", md: "flex" },
							}}
						>
							Plastic Footprint
						</Typography>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
						nihil provident ipsum error non ex quo totam. Neque distinctio
						placeat quisquam necessitatibus, possimus debitis odio, repudiandae
						reiciendis sapiente atque labore!
					</div>

					<div className="Footer__center">
						<Typography
							variant="h2"
							noWrap
							component="div"
							sx={{
								mr: 2,
								my: 2,
								fontFamily: "'Merienda', cursive",
								fontSize: "28px",
								justifyContent: "center",
								fontWeight: "700",
								display: { xs: "none", md: "flex" },
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
							variant="h2"
							noWrap
							component="div"
							sx={{
								mr: 2,
								my: 2,
								fontFamily: "'Merienda', cursive",
								fontSize: "28px",
								textAlign: "center",
								justifyContent: "center",
								fontWeight: "700",
								display: { xs: "none", md: "flex" },
							}}
						>
							Contact Us
						</Typography>
						<div className="Footer__links">
							<Link to="https://www.linkedin.com/in/ajay-nair-837986155">
								Ajay Nair
							</Link>
							<Link to="https://www.linkedin.com/in/guru-akaash-janthalur-n-5262101b9/">
								Guru Akaash Janthalur
							</Link>
							<Link to="https://www.linkedin.com/in/manigandan-kasimani-537964213/?_l=en_US">
								Manigandan Kasimani
							</Link>
							<Link to="https://www.linkedin.com/in/varun-tripathy-70934921b">
								Varun Tripathy
							</Link>
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
