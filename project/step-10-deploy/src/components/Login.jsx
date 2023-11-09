import React, { useState, useEffect, useContext } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";
const Login = (props) => {
	const { user, onLogin} = useContext(UserContext);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	useEffect(() => {
		if (user.isAuthenticated) {
			navigate("/");
		}
	}, [user]);

	const handleLogin = (event) => {
		event.preventDefault();
		onLogin(email, password);
	};

	return (
		<form className="container" name="login" onSubmit={handleLogin}>
			<p>
				<label htmlFor="email">Email:</label>
				<input
					type="email"
					onChange={(event) => setEmail(event.target.value)}
				/>
			</p>
			<p>
				<label htmlFor="password">Password:</label>
				<input
					type="password"
					onChange={(event) => setPassword(event.target.value)}
				/>
				<button type="submit" disabled={!email && !password}>
					Login
				</button>
			</p>
		</form>
	);
};
export default Login;
