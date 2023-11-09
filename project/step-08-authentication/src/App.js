import React from "react";
import UserContext from "./contexts/UserContext";
import Header from "./components/Header";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import useLocalStorageState from "use-local-storage-state";
import Message from "./components/Message";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./utils/firebase";
import "./App.css";

const App = (props) => {
	const [posts, setPosts] = useLocalStorageState("posts", {
		defaultValue: [],
	});
	const [user, setuser] = useLocalStorageState("user", {
		defaultValue: [],
	});
	const [message, setMessage] = useState(null);

	const onLogin = (email, password) => {
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				setuser({
					email: user.email,
					isAuthenticated: true,
				});
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
			});
	};

	const onLogout = () => {
		signOut(auth);
		setuser({
			email: "",
			isAuthenticated: false,
		});
	};

	const setFlashMessage = (message) => {
		setMessage(message);
		setTimeout(() => {
			setMessage(null);
		}, 1600);
	};

	const deletePost = (post) => {
		if (window.confirm("Delete this post?")) {
			const updatedPosts = posts.filter((p) => p.id !== post.id);
			setPosts(updatedPosts);
			setFlashMessage(`deleted`);
		}
	};

	return (
		<UserContext.Provider value={{ user, onLogin, onLogout }}>
			<div className="App">
				<Header onLogout={onLogout} />
				{message && <Message type={message} />}
				<Outlet
					context={{
						postsContext: [posts, setPosts],
						setFlashMessage: setFlashMessage,
						deletePost: deletePost,
					}}
				/>
			</div>
		</UserContext.Provider>
	);
};
export default App;
