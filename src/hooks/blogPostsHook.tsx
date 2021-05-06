import { useQuery } from "@apollo/client";
import { blogPostsQuery } from "../pages/BlogPosts/blogPostsQuery";

export const useBlogPost = () => {
  const { loading, error, data } = useQuery(blogPostsQuery);
  let blogPostCollection;
  if (!loading && !error) {
    blogPostCollection = data.blogPostCollection.items;
  }

  return [loading, error, blogPostCollection];
};
