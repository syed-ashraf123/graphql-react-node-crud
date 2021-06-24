import { gql } from "@apollo/client";

export const LOAD_USERS = gql`
  query {
    getAll {
      id
      title
      description
    }
  }
`;
