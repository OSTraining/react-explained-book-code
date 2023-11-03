import React from "react";
/*
  1. Make sure Create React App is running.
  2. When a minimum or maximum is reached, display a message.
*/

const Header = (props) => <h2>{props.text}</h2>;

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>;

class Practice5 extends React.Component {
	state = {
		count: 0,
	};

	minMaxReached = (newCount) => {
		if (5 < Math.abs(newCount)) {
			alert("You've reached the minimum or maximum value!");
			return true;
		}
		return false;
	};

	increment = () => {
		const newCount = this.state.count + 1;
		if (this.minMaxReached(newCount)) {
			return;
		}
		this.setState({ count: newCount });
	};

	decrement = () => {
		const newCount = this.state.count - 1;
		if (this.minMaxReached(newCount)) {
			return;
		}
		this.setState({ count: newCount });
	};

	reset = () => {
		this.setState({ count: 0 });
	};

	render() {
		return (
			<>
				<Header text={this.state.count} />
				<Button onClick={this.decrement} text="-" />
				<Button onClick={this.increment} text="+" />
				<Button onClick={this.reset} text="Reset" />
			</>
		);
	}
}

export default Practice5;
