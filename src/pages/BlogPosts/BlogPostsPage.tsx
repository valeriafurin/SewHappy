import React from "react";
import { useQuery } from "@apollo/client";
import { StyledPagesBanner } from "../pagesStyles/PagesBanner.styled";
import { blogPostsQuery } from "./blogPostsQuery";
import BlogArticleCard from "./BlogArticleCard";
import { BlogPost } from "./BlogPostsPage.types";
import { SewLayout } from "../pagesStyles/BlogStyle.styled";
import { Link } from "react-router-dom";

type LinkState = {
  post: BlogPost;
};

const Blog = () => {
  const { loading, error, data } = useQuery(blogPostsQuery);

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error: {error.message} </p>;

  return (
    <div>
      <StyledPagesBanner>
        <h1>The Sewing Blog</h1>
      </StyledPagesBanner>
      <SewLayout>
        {data.blogPostCollection.items.map((post: BlogPost) => {
          return (
            <Link
              to={{
                pathname: `/blog/${post.uId}`,
                state: { post: post },
              }}
              style={{ textDecoration: "none" }}
            >
              <BlogArticleCard post={post} />
            </Link>
          );
        })}
      </SewLayout>
    </div>
  );
};

export default Blog;
