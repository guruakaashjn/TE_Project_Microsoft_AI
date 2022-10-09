import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/Dataset.css";
import "../css/Footer.css";
import Footer from "../components/Footer";
import ReactPaginate from "react-paginate";
import { Skeleton } from "@mui/material";
import Header from "../components/Header";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const Dataset = ({ home }) => {
	const [csvData, setCsvData] = useState(null);
	const [page, setPage] = useState(1);

	useEffect(() => {
		const url = "https://plasticlessindia.azurewebsites.net/";
		const config = {
			//http://localhost/3000
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
		};

		try {
			const getDataset = async () => {
				const response = await axios.get(
					`${url}/api/get-dataset?page=${page}`,
					config
				);
				// console.log(response.data);
				if (response.status === 200) {
					// const jsonData = JSON.parse(response.data);
					setCsvData(response.data);
					console.log(response.data);
				}
			};
			getDataset();
		} catch (error) {
			console.log(error);
		}
	}, [page]);

	console.log(csvData)

	const handlePageChange = (event) => {
		setPage(event.selected + 1);
	};

	// const downloadFile = async () => {
	// 	const url = "https://plasticlessindia.azurewebsites.net/";
	// 	const config = {
	// 		//http://localhost/3000
	// 		responseType: "blob",
	// 		"Access-Control-Allow-Origin": "*",

	// 		"Content-Type": "text/csv",
	// 		"Content-Disposition": 'attachment; filename="plasticFootprint.csv"',
	// 	};

	// 	try {
	// 		const download = async () => {
	// 			await axios
	// 				.get(`${url}/api/dataset/download-dataset`, config)
	// 				.then((response) => {
	// 					console.log("Successful");
	// 					console.log(response);
	// 					// saveAs(response.data, "plasticFootprint.csv");
	// 				})
	// 				.catch((e) => console.log(e));
	// 		};
	// 		download();
	// 	} catch (error) {
	// 		console.log("Something went wrong");
	// 		console.log(error);
	// 	}
	// };

	return (
		<div className="Dataset__page">
			<Header home={home} />
			<div className="dataset__header">
				<h3 className="Dataset__title">
					{" "}
					<span></span> Dataset
				</h3>
			</div>
			<div className="Dataset__container">
				<div className="Dataset">
					{csvData ? (
						<div>
							<table
								className="Dataset__table"
								// style={{ width: "100%", minWidth: "1000px" }}
							>
								<thead>
									<tr>
										{Object.keys(csvData[0]).map((title, titleKey) => {
											console.log(title);
											return <th key={titleKey}>{title}</th>;
										})}
									</tr>
								</thead>
								<tbody>
									{csvData.map((row, rowKey) => {
										// console.log(row);
										return (
											<tr key={rowKey}>
												{Object.keys(row).map((col, colKey) => {
													return <td key={colKey}>{row[col]}</td>;
												})}
											</tr>
										);
									})}
								</tbody>
							</table>
							{/* Requires bootstrap3 */}
						</div>
					) : (
						<Skeleton variant="rectangular" className="Dataset__skeleton" />
					)}
				</div>
			</div>
			<ReactPaginate
				breakLabel="..."
				nextLabel={<ArrowForwardIosIcon fontSize="medium" />}
				onPageChange={handlePageChange}
				pageCount={7}
				previousLabel={<ArrowBackIosIcon fontSize="medium" />}
				containerClassName={"navigationButtons"}
				previousLinkClassName={"previousButton"}
				nextLinkClassName={"nextButton"}
				disabledClassName={"navigationDisabled"}
				activeClassName={"navigationActive"}
				renderOnZeroPageCount={null}
			/>

			<section id="Landing__footer">
				<div className="footer__container">
					<Footer />
				</div>
			</section>
		</div>
	);
};

export default Dataset;
