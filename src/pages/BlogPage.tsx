import React from "react";
import { useQuery } from "@apollo/client";
import { StyledPagesBanner } from "./PagesBanner.styled";
import { blogPostQuery } from "../queries/blogPostQuery";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { DateWrapper, SewLayout, Title, Wrapper } from "../GlobalStyle";

const Blog = () => {
  const { loading, data } = useQuery(blogPostQuery);
  if (loading) return <p>Loading ...</p>;
  const post = data.blogPostCollection.items[0];
  const blogPostContent = post.blogPostContent.json;
  const date = post.publishDate;
  let d = new Date(date);

  return (
    <div>
      <StyledPagesBanner>
        <h1>The Sewing Blog</h1>
      </StyledPagesBanner>
      <SewLayout>
        <img src={post?.headlineImage?.url} alt="Blog Post" />

        <Wrapper>
          <Title>
            <h1>{post?.headline}</h1>
          </Title>
          <p>{documentToReactComponents(blogPostContent)}</p>
          <DateWrapper>
            <p>Published at: {d.toDateString()}</p>
          </DateWrapper>
        </Wrapper>
      </SewLayout>
    </div>
  );
};

export default Blog;
