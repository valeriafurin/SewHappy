import { gql } from "@apollo/client";

export const blogPostQuery = gql`
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
