import { Link } from "react-router-dom";
import { useState } from "react";
import postData from "../data/posts-data.json";


const Posts = (props) => {
	const [posts, setPosts] = useState(postData);

	return (
		<div className="posts container">
			<h1>Posts</h1>
			<ul>
				{posts.length < 1 && <li key="empty">No posts yet!</li>}
				{posts.map((post) => (
					<li key={post.id}>
						<Link to={`/post/${post.slug}`}>{post.title}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Posts;
