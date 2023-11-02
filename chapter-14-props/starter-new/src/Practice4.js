import React from "react";

const Practice4 = () => {
	const user = {
		id: 1,
		username: "alovelace",
		firstName: "Ada",
		lastName: "Lovelace",
		preferredName: "Ada",
		url: "https://ostraining.com",
		twitter: "@ostraining",
	};
	return (
		<div className="practice">
			{/*         
        1. Spread the "user" object into User so each "user" property becomes it's own prop
      */}
			<User />
		</div>
	);
};

/*
  2. Destructure username and firstName from props
*/
const User = (props) => {
	return (
		<div className="user">
			<h1>Hi FIRSTNAME_HERE!</h1>
			<p>Username: USERNAME_HERE</p>
		</div>
	);
};

export default Practice4;
