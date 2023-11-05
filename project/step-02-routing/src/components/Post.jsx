import { useLoaderData } from "react-router-dom";

const Post = (props) => {
	const post = useLoaderData();

	return (
		<article className="post container">
			<h1>{post.title}</h1>
			<div>{post.content}</div>
		</article>
	);
};

export default Post;
