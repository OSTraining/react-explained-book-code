import React, { useContext } from "react";
import UserContext from "../contexts/UserContext";
import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

const Posts = (props) => {
	const { user } = useContext(UserContext);
	const {
		postsContext: [posts, setPosts],
	} = useOutletContext();
	const { deletePost } = useOutletContext();
	return (
		<div className="posts container">
			<h1>Posts</h1>
			{posts.length < 1 ? (
				<p>No posts yet!</p>
			) : (
				<ul>
					{posts.map((post) => (
						<li key={post.id}>
							<h2>
								<Link to={`/post/${post.slug}`}>{post.title}</Link>
							</h2>
							{user.isAuthenticated && (
								<p>
									<Link to={`/edit/${post.slug}`}>Edit</Link>
									{" | "}
									<button className="linkLike" onClick={() => deletePost(post)}>
										Delete
									</button>
								</p>
							)}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default Posts;
