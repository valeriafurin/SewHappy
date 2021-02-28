import { gql } from "@apollo/client";

export const query = gql`
  query getPageCollection {
    pageCollection {
      items {
        title
        logo {
          url
        }
      }
    }
  }
`;
