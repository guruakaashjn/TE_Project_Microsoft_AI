import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import articleImage from "../video/placeholder.jpg";
import "../css/Articles.css";

const Articles = ({ title, content, image, link }) => {
	return (
		<div className="articles">
			<Card
				sx={{ maxWidth: 345, boxShadow: 3 }}
				style={{ backgroundColor: "#DDFFBC" }}
			>
				<CardMedia
					component="img"
					height="140"
					image={image || articleImage}
					alt="green iguana"
				/>
				<CardContent sx={{ backgroundColor: "white", color: "#050706" }}>
					<Typography
						gutterBottom
						variant="h5"
						sx={{ fontWeight: "bold" }}
						color="#050706"
						component="div"
					>
						{title || "Lizard"}
					</Typography>
					<Typography variant="body2" color="#050706">
						{content ||
							"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"}
					</Typography>
				</CardContent>
				<CardActions sx={{ backgroundColor: "white" }}>
					<a
						href={link}
						className="articles__link"
						target="_blank"
						rel="noreferrer"
					>
						<Button size="small">Learn More</Button>
					</a>
				</CardActions>
			</Card>
		</div>
	);
};

export default Articles;
