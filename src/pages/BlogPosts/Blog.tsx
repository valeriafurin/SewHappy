import React from "react";
import { StyledPagesBanner } from "../pagesStyles/PagesBanner.styled";
import BlogArticleCard from "./BlogArticleCard";
import { BlogPost } from "./BlogPostsPage.types";
import { SewLayout } from "../pagesStyles/BlogStyle.styled";
import { useBlogPost } from "../../hooks/blogPostsHook";

const Blog = () => {
  const [loading, error, blogPostCollection] = useBlogPost();

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error: {error.message} </p>;

  return (
    <div>
      <StyledPagesBanner>
        <h1>The Sewing Blog</h1>
      </StyledPagesBanner>
      <SewLayout>
        {blogPostCollection.map((post: BlogPost) => {
          return <BlogArticleCard post={post} key={post.uId} />;
        })}
      </SewLayout>
    </div>
  );
};

export default Blog;
