import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import "./App.css";

const App = (props) => {
	return (
		<div className="App">
			<Header />
			<Outlet />
		</div>
	);
};
export default App;
