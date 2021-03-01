import { gql } from "@apollo/client";

export const mainTitleQuery = gql`
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
