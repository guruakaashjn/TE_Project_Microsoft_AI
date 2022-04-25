import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Table from "../components/Table";
import "../css/Header.css";
import "../css/Models.css";
import "../css/Footer.css";
import axios from "axios";
import Dropdown from "../components/Dropdown";
import LinePlot from "../components/LinePlot";
import Footer from "../components/Footer";

const Models = ({ home }) => {
	const years = {};
	for (let year = 2025; year >= 2011; year--) {
		years[year] = year;
	}

	const models = {
		"CatBoost Regression": "CatBoost Regression",
		// "Polynomial Regression": "Polynomial Regression",
		"RandomForest Regression": "RandomForest Regression",
	};

	const states = [
		"Andaman and Nicobar Islands",
		"Andhra Pradesh",
		"Arunachal Pradesh",
		"Assam",
		"Bihar",
		"Chandigarh",
		"Chhattisgarh",
		"Dadra and Nagar Haveli and Daman and Diu",
		"Delhi",
		"Goa",
		"Gujarat",
		"Haryana",
		"Himachal Pradesh",
		"Jammu and Kashmir",
		"Jharkhand",
		"Karnataka",
		"Kerala",
		"Lakshadweep",
		"Madhya Pradesh",
		"Maharashtra",
		"Manipur",
		"Meghalaya",
		"Mizoram",
		"Nagaland",
		"Odisha",
		"Puducherry",
		"Punjab",
		"Rajasthan",
		"Sikkim",
		"Tamil Nadu",
		"Telangana",
		"Tripura",
		"Uttar Pradesh",
		"Uttarakhand",
		"West Bengal",
	];

	const regions = {};
	for (let state = 0; state < states.length; state++) {
		regions[states[state]] = states[state];
	}

	console.log(regions);

	const [year, setYear] = useState(2020);
	const [region, setRegion] = useState("");
	const [actual, setActual] = useState("");
	const [predicted, setPredicted] = useState("");
	const [currentRegion, setCurrentRegion] = useState("");
	const [countryActual, setCountryActual] = useState("");
	const [countryPredicted, setCountryPredicted] = useState("");

	const [rows, setRows] = useState({});
	const [currentModel, setCurrentModel] = useState("RandomForest Regression");

	useEffect(() => {
		// console.log(year);
		// console.log(region);
		const url = "http://localhost:8000";
		const config = {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
		};
		try {
			const getOneYearData = async () => {
				const response = await axios.get(
					`${url}/api/get-data-year?year=${year}`,
					config
				);
				console.log(response.data);
				if (response.status === 200) {
					setRows(response.data);
				}
			};
			if (year) {
				getOneYearData();
			}
		} catch (error) {
			console.log(error.message);
		}
	}, [year]);

	useEffect(() => {
		console.log(rows);
	}, [rows]);

	useEffect(() => {
		const url = "http://localhost:8000";
		const config = {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
		};

		try {
			const getOneStateData = async () => {
				console.log(region);
				const response = await axios.get(
					`${url}/api/get-data-state?state=${region}`,
					config
				);
				if (response.status === 200) {
					setCurrentRegion(response.data);
					setActual({
						x: response.data.year,
						y: response.data.plastic,
						type: "scatter",
					});
					console.log(response.data);
				}
			};
			if (region) {
				getOneStateData();
			}
		} catch (error) {
			console.log(error.message);
		}
	}, [region]);

	useEffect(() => {
		console.log(region);
	}, [region]);

	// to get the predicted value of a state
	useEffect(() => {
		const url = "http://localhost:8000";
		const config = {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
		};

		try {
			const getOneStateDataOverYears = async () => {
				console.log(region);
				const response = await axios.get(
					`${url}/api/get-random-over?state=${region}&year=${year}`,
					config
				);
				if (response.status === 200) {
					setPredicted({
						x: Object.keys(years),
						y: response.data.predictedValue,
						type: "scatter",
					});
					console.log(response.data);
				}
			};
			if (region) {
				getOneStateDataOverYears();
			}
		} catch (error) {
			console.log(error.message);
		}
	}, [year, region]);

	// State wise Catboost regression

	useEffect(() => {
		const url = "http://localhost:8000";
		const config = {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
		};

		try {
			const getOneStateDataOverYearsCB = async () => {
				console.log(region);
				const response = await axios.get(
					`${url}/api/get-cb-over?state=${region}&year=${year}`,
					config
				);
				if (response.status === 200) {
					setPredicted({
						x: Object.keys(years),
						y: response.data.predictedValue,
						type: "scatter",
					});
					console.log(response.data);
				}
			};
			if (currentModel === "CatBoost Regression") {
				getOneStateDataOverYearsCB();
			}
		} catch (error) {
			console.log(error.message);
		}
	}, [year, region, currentModel]);

	// FOr country wise catBoost regression

	// console.log(actual);
	// console.log(predicted);
	return (
		<div>
			<Header home={home} />
			<div className="models">
				<div className="models__dropdown">
					<Dropdown setVariable={setYear} label={"Years"} labels={years} />
					<Dropdown
						setVariable={setRegion}
						label={"Regions"}
						labels={regions}
					/>
					<Dropdown
						setVariable={setCurrentModel}
						label="Models"
						labels={models}
					/>
				</div>
				<div className="models__data">
					<Table row={rows} />
					<div className="models__plot">
						<LinePlot
							model={currentModel}
							label={"State Wise Prediction of "}
							actual={actual}
							predicted={predicted}
							state={region}
						/>

						{/* <LinePlot
							model={currentModel}
							label={"Country Wise Prediction of "}
							actual={actual}
							predicted={predicted}
							state={region}
						/> */}
					</div>
				</div>
			</div>
			<section id="Landing__footer">
				<div className="footer__container">
					<Footer />
				</div>
			</section>
		</div>
	);
};

export default Models;
