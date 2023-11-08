import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Quill from "react-quill";
import { useOutletContext } from "react-router-dom";
import { getPostBySlug } from "../utils/utils";
import { defaultPost } from "../utils/utils";

import "react-quill/dist/quill.snow.css";

const PostForm = (props) => {
	const defaultPost = { id: 0, slug: "", title: "", content: "" };
	const { action } = props;
	const { postSlug } = useParams();
	const navigate = useNavigate();
	const { setFlashMessage } = useOutletContext();
	const {
		postsContext: [posts, setPosts],
	} = useOutletContext();

	const postToEdit =
		"create" === action
			? defaultPost
			: getPostBySlug({ postSlug }, posts) ?? defaultPost;

	const [post, setPost] = useState(postToEdit);

	// @todo change these refs to check against the action
	const prevPostRef = useRef();
	useEffect(() => {
		prevPostRef.current = post;
	}, [post]);
	const prevPost = prevPostRef.current;

	const quillRef = useRef();
	useEffect(() => {
		if (prevPost && quillRef.current) {
			console.log(prevPost.id)
			console.log(post.id)

			if (post.id !== prevPost.id) {
				console.log('not here')
				setPost({ ...post });
				quillRef.current.getEditor().setContents(``);
			}
		}
	}, [prevPost, post]);

	const addNewPost = (post) => {
		post.id = posts.length + 1;
		post.slug = encodeURIComponent(
			post.title.toLowerCase().split(" ").join("-")
		);
		setPosts([...posts, post]);
		setFlashMessage("saved");
	};

	const updatePost = (post) => {
		const postIndex = posts.findIndex((p) => p.id === post.id);
		const updatedPosts = [...posts];
		updatedPosts[postIndex] = post;
		setPosts(updatedPosts);
		setFlashMessage("updated");
	};

	const handlePostForm = (event) => {
		event.preventDefault();
		if ("" === post.title) {
			alert("Title required");
			return;
		}

		switch (action) {
			case "create":
				addNewPost(post);
				break;
			case "edit":
				updatePost(post);
				break;
		}
		navigate("/");
	};

	return (
		<form className="container" onSubmit={handlePostForm}>
			<h1>{action.charAt(0).toUpperCase() + action.slice(1)} a Post</h1>
			<p>
				<label htmlFor="form-title">Title:</label>
				<br />
				<input
					id="form-title"
					value={post.title}
					onChange={(event) => setPost({ ...post, title: event.target.value })}
				/>
			</p>
			<p>
				<label htmlFor="form-content">Content:</label>
			</p>
			<Quill
				ref={quillRef}
				value={post.content}
				onChange={(content, delta, source, editor) => {
					setPost({
						...post,
						content: editor.getContents(),
					});
				}}
			/>
			<p>
				<button type="submit">Save</button>
			</p>
		</form>
	);
};
export default PostForm;
