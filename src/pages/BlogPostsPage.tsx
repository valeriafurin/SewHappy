import React from "react";
import { useQuery } from "@apollo/client";
import { StyledPagesBanner } from "./pagesStyles/PagesBanner.styled";
import { blogPostsQuery } from "../queries/blogPostsQuery";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { DateWrapper, SewLayout } from "./pagesStyles/BlogStyle.styled";
import {
  CardBody,
  CardHeading,
  CardWrapper,
} from "./pagesStyles/CardStyle.styled";

const Blog = () => {
  const { loading, error, data } = useQuery(blogPostsQuery);

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error!</p>;

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
        <CardWrapper>
          <img src={post?.headlineImage?.url} alt="Blog Post" />

          <CardHeading>
            <h1>{post?.headline}</h1>
          </CardHeading>
          <CardBody>
            <p>{documentToReactComponents(blogPostContent)}</p>
          </CardBody>
          <DateWrapper>
            <p>Published at: {d.toDateString()}</p>
          </DateWrapper>
        </CardWrapper>
      </SewLayout>
    </div>
  );
};

export default Blog;
