import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import "./App.css";

const App = (props) => {
	return (
		<>
			<Header />
			<Outlet />
		</>
	)
};
export default App;
