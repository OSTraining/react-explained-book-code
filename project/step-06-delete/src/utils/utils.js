export const getPostBySlug = (params, posts) => {
	const post = posts.find((post) => post.slug === params.postSlug);
	if (!post) return null;
	return post;
};
