import React from "react";
import { DateWrapper } from "../pagesStyles/BlogStyle.styled";
import {
  CardBody,
  CardHeading,
  CardWrapper,
  ReadMore,
} from "../pagesStyles/CardStyle.styled";
import { BlogArticleCardProps } from "./BlogPostsPage.types";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { Link } from "react-router-dom";

let truncateString = (str: string, num: number): string => {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + " ...";
};

const BlogArticleCard: React.FC<BlogArticleCardProps> = ({ post }) => {
  const blogPostContent = post.blogPostContent.json;
  let stringedText = documentToHtmlString(blogPostContent);
  let shortenedText = truncateString(stringedText, 100);
  var stripedHtml = shortenedText.replace(/<[^>]+>/g, "");

  const date = post.publishDate;
  let d = new Date(date);

  return (
    <div>
      <Link
        to={{
          pathname: `/blog/${post.uId}`,
          state: { post: post },
        }}
        style={{ textDecoration: "none" }}
      >
        <CardWrapper>
          <img src={post?.headlineImage?.url} alt="Blog Post" />

          <CardHeading>
            <h1>{post?.headline}</h1>
          </CardHeading>
          <CardBody>
            <p>{stripedHtml}</p>
            <ReadMore>MORE</ReadMore>
          </CardBody>
          <DateWrapper>
            <p>Published at: {d.toDateString()}</p>
          </DateWrapper>
        </CardWrapper>
      </Link>
    </div>
  );
};

export default BlogArticleCard;
