import "./App.css";
import Concern from "./components/Concern";
import Dataset from "./pages/Dataset";
import Landing from "./pages/Landing";
import Plotgraph from "./components/Plot";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Landing home={true} />} />
				<Route path="/dataset" element={<Dataset home={false} />} />
				<Route path="/visualisation" element={<Plotgraph home={false} />} />
			</Routes>
		</div>
	);
}

export default App;
