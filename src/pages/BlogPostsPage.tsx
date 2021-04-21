import React from "react";
import { useQuery } from "@apollo/client";
import { StyledPagesBanner } from "./pagesStyles/PagesBanner.styled";
import { blogPostsQuery } from "../queries/blogPostsQuery";
import SingleBlogArticle from "./SingleBlogArticlePage";
import { BlogPost } from "./BlogpPostsPage.types";

const Blog = () => {
  const { loading, error, data } = useQuery(blogPostsQuery);

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error!</p>;

  return (
    <div>
      <StyledPagesBanner>
        <h1>The Sewing Blog</h1>
      </StyledPagesBanner>
      {data.blogPostCollection.items.map((post: BlogPost) => {
        return <SingleBlogArticle post={post} />;
      })}
    </div>
  );
};

export default Blog;
