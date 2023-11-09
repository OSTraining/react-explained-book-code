import React from "react";

import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import NotFound from "../components/NotFound";
import Posts from "../components/Posts";
import Post from "../components/Post";
import PostForm from "../components/PostForm";
import Login from "../components/Login";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <NotFound />,
		children: [
			{
				index: true,
				element: <Posts />,
			},
			{
				path: "post/:postSlug",
				element: <Post />,
			},
			{
				path: "new",
				index: true,
				element: <PostForm action="create" />,
			},
			{
				path: "edit/:postSlug",
				element: <PostForm action="edit" />,
			},
			{
				path: "login",
				element: <Login />,
			},
		],
	},
]);

export default router;
