import React from "react";
// import { createTheme } from "@material-ui/core/styles";
import { Drawer, List, ListItemButton, ListItemText } from "@mui/material";
import "../css/DrawerComp.css";
const DrawerComp = ({ openDrawer, setOpenDrawer, pages }) => {
	// const [openDrawer, setopenDrawer] = useState(false);

	// console.log(pages);
	return (
		<div className="Drawer">
			<Drawer
				className="Drawer__component"
				open={openDrawer}
				// sx={{ backgroundColor: "#050706" }}
				// classes={{ paper: styles.paper }}
				onClose={() => setOpenDrawer(!openDrawer)}
			>
				<List
					className="Drawer__List"
					sx={{
						backgroundColor: "#050706",
						color: "#ccc",
						fontWeight: 700,
					}}
				>
					{pages &&
						pages.map((key, page) => (
							<ListItemButton className="List__button" id={key} sx={{ m: 1.5 }}>
								<ListItemText className="List__text">
									{pages[page]}
								</ListItemText>
							</ListItemButton>
						))}
				</List>
			</Drawer>
		</div>
	);
};

export default DrawerComp;
