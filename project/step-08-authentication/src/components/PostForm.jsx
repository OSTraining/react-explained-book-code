import React from "react";
import { useState, useEffect, useRef, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useOutletContext } from "react-router-dom";
import { getPostBySlug } from "../utils/utils";
import UserContext from "../contexts/UserContext";

const PostForm = (props) => {
	const { user } = useContext(UserContext);
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

	useEffect(() => {
		if (!user.isAuthenticated) {
			navigate("/login");
		}
	}, [user]);

	// Clear out form on action change.
	const prevPostRef = useRef();
	const prevActionRef = useRef();
	useEffect(() => {
		prevPostRef.current = post;
		prevActionRef.current = action;
	}, [post]);
	const prevPost = prevPostRef.current;
	const prevAction = prevActionRef.current;

	const quillRef = useRef();
	useEffect(() => {
		if (prevAction && quillRef.current) {
			if (prevAction !== action) {
				setPost(defaultPost);
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
			<ReactQuill
				ref={quillRef}
				value={post.content}
				onChange={(content, delta, source, editor) => {
					setPost({
						...post,
						content: editor.getContents(),
					});
				}}
			/>
			{/* <textarea
				defaultValue={post.content}
				id="form-content"
				rows={10}
				cols={40}
				onChange={(event) => setPost({ ...post, content: event.target.value })}
			/> */}
			<p>
				<button type="submit">Save</button>
			</p>
		</form>
	);
};
export default PostForm;
