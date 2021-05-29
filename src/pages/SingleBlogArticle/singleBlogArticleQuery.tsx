import { gql } from "@apollo/client";

export const singleBlogArticleQuery = gql`
  query getSingleBlogArticle($id: String) {
    blogPost(id: $id) {
      headline
      headlineImage {
        description
        url
      }
      blogPostContent {
        json
      }
      publishDate
    }
  }
`;
