import Header from "./components/Header";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Message from "./components/Message";
import "./App.css";

const App = (props) => {
	const [posts, setPosts] = useState([]);
	const [message, setMessage] = useState(null);

	const setFlashMessage = (message) => {
		setMessage(message);
		setTimeout(() => {
			setMessage(null);
		}, 1600);
	};

	return (
		<div className="App">
			<Header />
			{message && <Message type={message} />}
			<Outlet context={{ postsContext: [posts, setPosts], setFlashMessage: setFlashMessage }}  />
		</div>
	);
};
export default App;
