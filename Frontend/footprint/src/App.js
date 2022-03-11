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
				<Route path="/" element={<Landing />} />
				<Route path="/dataset" element={<Dataset />} />
				<Route path="/visualisation" element={<Plotgraph />} />
			</Routes>
		</div>
	);
}

export default App;
