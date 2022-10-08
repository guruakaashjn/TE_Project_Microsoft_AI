import React, { useState } from "react";
import "../css/Header.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
// import { useTheme } from "@mui/system";
// import useMediaQuery from "@mui/material/useMediaQuery";
import DrawerComp from "./DrawerComp";

const Header = ({ home }) => {
	// const theme = useTheme();
	// console.log(theme);
	// const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
	// console.log(isMatch);
	const path = {
		Home: "/",
		Visualisation: "/visualisation",
		Models: "/models",
		Dataset: "/dataset",
		DatasetOcean: "/datasetOcean",
		Preventions: "/preventions",
	};
	// console.log(home);
	const pages = ["Home", "Visualisation", "Models", "Dataset", "DatasetOcean", "Preventions"];
	// const [anchorElNav, setAnchorElNav] = React.useState(null);
	// const [anchorElUser, setAnchorElUser] = React.useState(null);

	// const handleOpenNavMenu = (event) => {
	// 	setAnchorElNav(event.currentTarget);
	// };
	// const handleOpenUserMenu = (event) => {
	// 	setAnchorElUser(event.currentTarget);
	// };

	// const handleCloseNavMenu = () => {
	// 	setAnchorElNav(null);
	// };

	// const handleCloseUserMenu = () => {
	// 	setAnchorElUser(null);
	// };

	const [openDrawer, setOpenDrawer] = useState(false);

	const handleOpenDrawer = () => {
		setOpenDrawer(!openDrawer);
	};

	return (
		<div className={home ? "header" : "header-static"}>
			<div className="header__nav">
				<AppBar position="static" className="header__appbar">
					<Container maxWidth="xl">
						<Toolbar disableGutters>
							{/* <div className="title">
								<img src={Logo} alt="logo" /> */}
							<Typography
								variant="h5"
								noWrap
								component="div"
								sx={{
									mr: 2,
									fontFamily: "'Merienda', cursive",
									fontWeight: "700",
									display: { xs: "none", md: "flex" },
								}}
							>
								Plastic Footprint
							</Typography>
							{/* </div> */}
							<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
								<IconButton
									size="large"
									aria-label="account of current user"
									aria-controls="menu-appbar"
									aria-haspopup="true"
									onClick={handleOpenDrawer}
									color="inherit"
								>
									<MenuIcon />
								</IconButton>
								<DrawerComp
									openDrawer={openDrawer}
									pages={pages}
									setOpenDrawer={setOpenDrawer}
								/>
							</Box>

							<Typography
								variant="h6"
								noWrap
								component="div"
								sx={{
									flexGrow: 1,
									fontSize: "28px",
									fontFamily: "'Merienda', cursive",
									display: { xs: "flex", md: "none" },
								}}
							>
								Plastic Footprint
							</Typography>
							<Box
								className="header__navbar"
								sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
							>
								{pages.map((page) => (
									<Link key={page} to={path[page]}>
										<Button
											className="header__buttons"
											key={page}
											// onClick={handleCloseNavMenu}
											sx={{
												my: 2,
												mx: 0.8,
												fontFamily: "'Merienda', cursive",
												fontSize: "16px",
												color: "white",
												display: "block",
											}}
										>
											{page}
										</Button>
									</Link>
								))}
							</Box>
						</Toolbar>
					</Container>
					<DrawerComp />
				</AppBar>
			</div>
		</div>
	);
};

export default Header;
