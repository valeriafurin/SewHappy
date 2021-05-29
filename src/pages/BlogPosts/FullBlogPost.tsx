import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { DateWrapper } from "../pagesStyles/BlogStyle.styled";
import { CardBody, CardHeading } from "../pagesStyles/CardStyle.styled";
import { useBlogPost } from "../../hooks/blogPostsHook";
import { useRouteMatch } from "react-router-dom";
import { BlogPost } from "./BlogPostsPage.types";
import {
  FullBlogLayout,
  TitleImage,
} from "../pagesStyles/FullBlogStyle.styled";

type FullBlogPostMatchProps = {
  uid: string;
};

const FullBlogPost: React.FC = () => {
  const match = useRouteMatch<FullBlogPostMatchProps>();
  const uid = match.params.uid;
  const [loading, error, blogPostCollection] = useBlogPost();

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error: {error.message} </p>;

  const filteredPosts = blogPostCollection.filter(
    (post: BlogPost) => post.uId === uid
  );

  const post = filteredPosts[0];
  if (!post) return null;

  const blogContent = post.blogPostContent.json;

  const date = post.publishDate;
  let d = new Date(date);

  return (
    <div>
      <FullBlogLayout>
        <CardHeading>
          <h1>{post?.headline}</h1>
        </CardHeading>
        <TitleImage src={post?.headlineImage?.url} alt="Blog Post" />
        <CardBody>
          <p>{documentToReactComponents(blogContent)}</p>
        </CardBody>
        <DateWrapper>
          <p>Published at: {d.toDateString()}</p>
        </DateWrapper>
      </FullBlogLayout>
    </div>
  );
};

export default FullBlogPost;
