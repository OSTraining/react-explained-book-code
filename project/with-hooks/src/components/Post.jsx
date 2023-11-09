import { useParams, useOutletContext } from "react-router-dom";
import { getPostBySlug } from "../utils/utils";
import { QuillDeltaToHtmlConverter } from "quill-delta-to-html";

const Post = (props) => {
	const { postSlug } = useParams();
	const { postsContext: [posts, setPosts] } = useOutletContext();
	const post = getPostBySlug({ postSlug }, posts);
	const converter = new QuillDeltaToHtmlConverter(post.content.ops, {});
	const contentHTML = converter.convert();

	return (
		<article className="post container">
			<h1>{post.title}</h1>
			<div
				className="content"
				dangerouslySetInnerHTML={{
					__html: contentHTML,
				}}
			/>
		</article>
	);
};

export default Post;