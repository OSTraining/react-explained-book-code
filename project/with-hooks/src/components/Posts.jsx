import React, { useContext, useEffect } from "react";
import UserContext from "../contexts/UserContext";
import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import { ref, onValue } from "firebase/database";
import { database } from "../utils/firebase";

const Posts = (props) => {
	const { user } = useContext(UserContext);
	const {
		postsContext: [posts, setPosts],
	} = useOutletContext();
	const { deletePost } = useOutletContext();

	useEffect(() => {
		const postsRef = ref(database, "posts/" + user.id);
		onValue(postsRef, (snapshot) => {
			const posts = snapshot.val();
			const newStatePosts = [];
			for (let post in posts) {
				newStatePosts.push({
					key: post,
					slug: posts[post].slug,
					title: posts[post].title,
					content: posts[post].content,
				});
			}
			setPosts(newStatePosts);
		});
	}, [posts]);

	return (
		<div className="posts container">
			<h1>Posts</h1>
			{posts.length < 1 ? (
				<p>No posts yet!</p>
			) : (
				<ul>
					{posts.map((post) => (
						<li key={post.slug}>
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
