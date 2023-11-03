import React from "react";

class Practice2 extends React.Component {
	state = {
		posts: [],
	};
	/* 
    1. Add the method componentDidMount()
    2. Call fetch("https://make.wordpress.org/wp-json/wp/v2/handbook")
    3. Then call .json() on the response
    4. Take that and set it as the value of posts in state
    5  Add a catch to log out any errors
  */
	componentDidMount() {
		fetch("https://make.wordpress.org/wp-json/wp/v2/handbook")
			.then((response) => response.json())
			.then((posts) => {
				this.setState({ posts });
			})
			.catch((error) => console.error(error));
	}
	render() {
		return (
			<header>
				<h1>Posts</h1>
				<ul>
					{this.state.posts.map((post) => (
						<li key={post.id}>{post.title.rendered}</li>
					))}
				</ul>
			</header>
		);
	}
}

export default Practice2;
