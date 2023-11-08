import Header from "./components/Header";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";

const App = (props) => {
	const [posts, setPosts] = useState([]);
	return (
		<div className="App">
			<Header />
			<Outlet context={[posts, setPosts]} />
		</div>
	);
};
export default App;
