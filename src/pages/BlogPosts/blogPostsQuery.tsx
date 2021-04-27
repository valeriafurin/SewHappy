import { gql } from "@apollo/client";

export const blogPostsQuery = gql`
  query getBlogPost {
    blogPostCollection(order: publishDate_DESC) {
      items {
        uId
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
