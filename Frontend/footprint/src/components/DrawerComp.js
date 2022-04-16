import React, { useState } from "react";
import { Drawer, List, ListItemButton, ListItemText } from "@mui/material";

const DrawerComp = ({ openDrawer, setOpenDrawer, pages }) => {
	// const [openDrawer, setopenDrawer] = useState(false);

	console.log(pages);
	return (
		<div className="Drawer">
			<Drawer open={openDrawer} onClose={() => setOpenDrawer(!openDrawer)}>
				<List
					sx={{
						backgroundColor: "#050706",
						color: "#ccc",
						fontWeight: 700,
					}}
				>
					{pages &&
						pages.map((key, page) => (
							<ListItemButton id={key} sx={{ m: 1.5 }}>
								<ListItemText>{pages[page]}</ListItemText>
							</ListItemButton>
						))}
				</List>
			</Drawer>
		</div>
	);
};

export default DrawerComp;
