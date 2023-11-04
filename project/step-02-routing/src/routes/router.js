import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import NotFound from "../components/NotFound";
import Posts from "../components/Posts";
import Post from "../components/Post";
import postsData from "../data/posts-data.json";
import { getPostBySlug } from "../utils/utils";

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
				loader: ({ params }) => getPostBySlug(params, postsData),
			},
		],
	},
]);

export default router;
