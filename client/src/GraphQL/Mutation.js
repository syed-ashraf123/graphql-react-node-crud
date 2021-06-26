import { gql } from "@apollo/client";
export const CREATE_POST = gql`
  mutation createPost($title: String, $description: String) {
    createPost(post: { title: $title, description: $description }) {
      id
      title
      description
    }
  }
`;

export const DELETE_POST = gql`
  mutation deletePost($id: String) {
    deletePost(id: $id)
  }
`;
