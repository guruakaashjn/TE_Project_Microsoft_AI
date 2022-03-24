import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/Dataset.css";
import { Skeleton } from "@mui/material";
import Header from "../components/Header";
import { Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import Pagination from "react-js-pagination";
import { saveAs } from "file-saver";
// require("bootstrap/less/bootstrap.less");

const Dataset = () => {
	const [csvData, setCsvData] = useState(null);
	const [activePage, setActivePage] = useState(1);

	useEffect(() => {
		const url = "http://localhost:8000";
		const config = {
			//http://localhost/3000
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
		};

		try {
			const getDataset = async () => {
				const response = await axios.get(`${url}/api/dataset`, config);
				// console.log(response.data);
				if (response.status === 200) {
					const jsonData = JSON.parse(response.data);
					setCsvData(jsonData);
					console.log(jsonData);
				}
			};
			getDataset();
		} catch (error) {
			console.log(error);
		}
	}, []);

	const handlePageChange = (pageNumber) => {
		console.log(`active page is ${pageNumber}`);
		setActivePage(pageNumber);
	};

	const downloadFile = async () => {
		const url = "http://localhost:8000";
		const config = {
			//http://localhost/3000
			responseType: "blob",
			"Access-Control-Allow-Origin": "*",

			"Content-Type": "text/csv",
			"Content-Disposition": 'attachment; filename="plasticFootprint.csv"',
		};

		try {
			const download = async () => {
				await axios
					.get(`${url}/api/dataset/download-dataset`, config)
					.then((response) => {
						console.log("Successful");
						console.log(response);
						saveAs(response.data, "plasticFootprint.csv");
					})
					.catch((e) => console.log(e));
			};
			download();
		} catch (error) {
			console.log("Something went wrong");
			console.log(error);
		}
	};

	return (
		<div className="Dataset__page">
			<Header />
			<div className="dataset__header">
				<h3 className="Dataset__title">
					{" "}
					<span>~</span> Dataset
				</h3>
				<Button
					variant="outlined"
					onClick={downloadFile}
					startIcon={<DownloadIcon />}
				>
					Download CSV
				</Button>
			</div>

			<div className="Dataset">
				{csvData ? (
					<div>
						<table
							className="Dataset__table"
							// style={{ width: "100%", minWidth: "1000px" }}
						>
							<thead>
								<tr>
									{csvData.columns.map((title, titleKey) => {
										return <th key={titleKey}>{title}</th>;
									})}
								</tr>
							</thead>
							<tbody>
								{csvData.data.map((row, rowKey) => {
									return (
										<tr key={rowKey}>
											{row.map((col, colKey) => {
												return <td key={colKey}>{col}</td>;
											})}
										</tr>
									);
								})}
							</tbody>
						</table>
						{/* Requires bootstrap3 */}
						{/* <Pagination
							activePage={activePage}
							itemsCountPerPage={10}
							totalItemsCount={450}
							pageRangeDisplayed={5}
							onChange={() => handlePageChange(3)}
						/> */}
					</div>
				) : (
					<Skeleton variant="rectangular" className="Dataset__skeleton" />
				)}
			</div>
		</div>
	);
};

export default Dataset;
