import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { DateWrapper, SewLayout } from "./pagesStyles/BlogStyle.styled";
import {
  CardBody,
  CardHeading,
  CardWrapper,
} from "./pagesStyles/CardStyle.styled";
import { SingleBlogArticleProps } from "./BlogpPostsPage.types";

const SingleBlogArticle: React.FC<SingleBlogArticleProps> = ({ post }) => {
  const blogPostContent = post.blogPostContent.json;
  const date = post.publishDate;
  let d = new Date(date);

  return (
    <div>
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

export default SingleBlogArticle;
