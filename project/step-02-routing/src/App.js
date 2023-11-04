import Header from "./components/Header";

import "./App.css";
import { Outlet } from "react-router-dom";

const App = (props) => {
	return (
		<>
			<Header />
			<Outlet />
		</>
	)
};
export default App;
