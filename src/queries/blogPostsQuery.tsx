import { gql } from "@apollo/client";

export const blogPostsQuery = gql`
  query getBlogPost {
    blogPostCollection(order: publishDate_DESC) {
      items {
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
  }
`;
