import React from "react";
import { useQuery } from "@apollo/client";
import { StyledPagesBanner } from "../pagesStyles/PagesBanner.styled";
import { blogPostsQuery } from "./blogPostsQuery";
import SingleBlogArticle from "../SingleBlogArticle/SingleBlogArticlePage";
import { BlogPost } from "./BlogpPostsPage.types";
import { SewLayout } from "../pagesStyles/BlogStyle.styled";

const Blog = () => {
  const { loading, error, data } = useQuery(blogPostsQuery);

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error!</p>;

  return (
    <div>
      <StyledPagesBanner>
        <h1>The Sewing Blog</h1>
      </StyledPagesBanner>
      <SewLayout>
        {data.blogPostCollection.items.map((post: BlogPost) => {
          return <SingleBlogArticle post={post} />;
        })}
      </SewLayout>
    </div>
  );
};

export default Blog;
