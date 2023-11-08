import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Quill from "react-quill";
import { useOutletContext } from "react-router-dom";

import "react-quill/dist/quill.snow.css";

const PostForm = (props) => {
	const {
		postsContext: [posts, setPosts],
	} = useOutletContext();
	const { setFlashMessage } = useOutletContext();
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const navigate = useNavigate();

	const addNewPost = (post) => {
		post.id = posts.length + 1;
		post.slug = encodeURIComponent(
			post.title.toLowerCase().split(" ").join("-")
		);
		setPosts([...posts, post]);
		setFlashMessage("saved");
	};

	const handlePostForm = (event) => {
		event.preventDefault();
		if (title) {
			const post = {
				title: title,
				content: content,
			};

			addNewPost(post);
			navigate("/");
		} else {
			alert("Title required");
		}
	};

	return (
		<form className="container" onSubmit={handlePostForm}>
			<h1>Add a New Post</h1>
			<p>
				<label htmlFor="form-title">Title:</label>
				<br />
				<input
					id="form-title"
					value={title}
					onChange={(event) => setTitle(event.target.value)}
				/>
			</p>
			<p>
				<label htmlFor="form-content">Content:</label>
			</p>
			<Quill
				onChange={(content, delta, source, editor) => {
					setContent(editor.getContents());
				}}
			/>
			<p>
				<button type="submit">Save</button>
			</p>
		</form>
	);
};
export default PostForm;
