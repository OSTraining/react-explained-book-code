export const getPostBySlug = (params, posts) => {
	return posts.find((post) => post.slug === params.postSlug);
};
