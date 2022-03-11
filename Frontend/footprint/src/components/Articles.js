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
			<Card sx={{ maxWidth: 345 }} style={{ backgroundColor: "#1A1A1B" }}>
				<CardMedia
					component="img"
					height="140"
					image={image || articleImage}
					alt="green iguana"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" color="#ffc947" component="div">
						{title || "Lizard"}
					</Typography>
					<Typography variant="body2" color="#ffc947">
						{content ||
							"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"}
					</Typography>
				</CardContent>
				<CardActions>
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
