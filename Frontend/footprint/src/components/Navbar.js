import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const Navbar = () => {
	return (
		<div className="Navbar">
			<div className="Navbar__left">
				<Link to={"/"}>
					<Button
						className="header__buttons"
						// onClick={handleCloseNavMenu}
						sx={{
							my: 2,
							color: "#fff8b5",
							textShadow: "1px 1px 2px black",
							fontSize: "1.2rem",
							display: "block",
							fontWeight: "bold",
						}}
					>
						HOME
					</Button>
				</Link>

				<Link to={"/visualisation"}>
					<Button
						className="header__buttons"
						// onClick={handleCloseNavMenu}
						sx={{
							my: 2,
							color: "#fff8b5",
							textShadow: "1px 1px 2px black",
							fontSize: "1.2rem",
							display: "block",
							fontWeight: "bold",
						}}
					>
						VISUALISATIONS
					</Button>
				</Link>
			</div>
			<div className="Navbar__center">
				<Link to={"/"}>
					<Button
						className="header__buttons Navbar__title"
						sx={{
							my: 2,
							color: "#fff8b5",
							textShadow: "1px 1px 2px black",
							display: "block",
							fontSize: "1.5rem",
							fontWeight: "bold",
							mx: "1rem",
						}}
					>
						PLASTIC FOOTPRINT
					</Button>
				</Link>
			</div>
			<div className="Navbar__right">
				<Link to={"/"}>
					<Button
						className="header__buttons"
						sx={{
							my: 2,
							color: "#fff8b5",
							textShadow: "1px 1px 2px black",
							fontSize: "1.2rem",
							display: "block",
							fontWeight: "bold",
						}}
					>
						MODELS
					</Button>
				</Link>
				<Link to={"/dataset"}>
					<Button
						className="header__buttons"
						sx={{
							my: 2,
							color: "#fff8b5",
							textShadow: "1px 1px 2px black",
							fontSize: "1.2rem",
							display: "block",
							fontWeight: "bold",
						}}
					>
						LAND DATASET
					</Button>
				</Link>
				<Link to={"/datasetOcean"}>
					<Button
						className="header__buttons"
						sx={{
							my: 2,
							color: "#fff8b5",
							textShadow: "1px 1px 2px black",
							fontSize: "1.2rem",
							display: "block",
							fontWeight: "bold",
						}}
					>
						OCEAN DATASET 
					</Button>
				</Link>
				<Link to={"/"}>
					<Button
						className="header__buttons"
						sx={{
							my: 2,
							color: "#fff8b5",
							textShadow: "1px 1px 2px black",
							fontSize: "1.2rem",
							display: "block",
							fontWeight: "bold",
						}}
					>
						ABOUT US
					</Button>
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
