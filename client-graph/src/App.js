import React from "react";
import { useQuery, gql, useMutation } from "@apollo/client";
// const getALL = gql`
//   {
//     getAll {
//       title
//       description
//     }
//   }
// `;
import { LOAD_USERS } from "./GraphQL/Query";

import { CREATE_POST, DELETE_POST } from "./GraphQL/Mutation";
function App() {
  const { loading, error, data } = useQuery(LOAD_USERS);
  const [createPost, { err }] = useMutation(CREATE_POST);
  const [deletePost, { errr }] = useMutation(DELETE_POST);
  if (loading) return <p>Loading</p>;
  if (error) return <p>Error {error}</p>;

  const addPost = () => {
    createPost({
      variables: {
        title: "A title",
        description: "A description",
      },
    });

    if (err) {
      console.log(err);
    }
  };
  const removePost = (id) => {
    deletePost({
      variables: {
        id: id,
      },
    });

    if (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {data.getAll.map((data) => (
        <>
          <p key={data.title}>
            {data.title} -- {data.description}
          </p>
          <button onClick={() => removePost(data.id)}>Delete </button>
        </>
      ))}
      <button onClick={() => addPost()}>Click Me</button>
    </div>
  );
}

export default App;
