import "./App.css";
import Concern from "./components/Concern";
import Dataset from "./pages/Dataset";
import Landing from "./pages/Landing";
import Prevention from "./pages/Prevention";
import Plotgraph from "./components/Plot";
import StatewiseScatter from "./components/StatewiseScatter";
import { Routes, Route } from "react-router-dom";
import Visualisation from "./pages/Visualisation";
import Models from "./pages/Models";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Landing home={true} />} />
				<Route path="/dataset" element={<Dataset home={false} />} />
				<Route path="/models" element={<Models home={false} />} />
				<Route path="/visualisation" element={<Visualisation home={false} />} />
				<Route path="/preventions" element={<Prevention home={false} />} />
			</Routes>
		</div>
	);
}

export default App;
