import React from "react";
import { useQuery } from "@apollo/client";
import { StyledPagesBanner } from "./PagesBanner.styled";
import { blogPostQuery } from "../queries/blogPostQuery";
import { SewLayout } from "../GlobalStyle";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const Blog = () => {
  const { loading, data } = useQuery(blogPostQuery);
  if (loading) return <p>Loading ...</p>;
  const post = data.blogPostCollection.items[0];
  const blogPostContent = post.blogPostContent.json;

  return (
    <StyledPagesBanner>
      <img src={post?.headlineImage?.url} alt="Blog Post" />
      <h1>{post?.headline}</h1>
      <p>{documentToReactComponents(blogPostContent)}</p>
    </StyledPagesBanner>
  );
};

export default Blog;
