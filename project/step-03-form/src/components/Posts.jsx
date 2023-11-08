import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

const Posts = (props) => {
	const [posts, setPosts] = useOutletContext();
	return (
		<div className="posts container">
			<h1>Posts</h1>
			{posts.length < 1 ? (
				<p>No posts yet!</p>
			) : (
				<ul>
					{posts.map((post) => (
						<li key={post.id}>
							<Link to={`/post/${post.slug}`}>{post.title}</Link>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default Posts;
