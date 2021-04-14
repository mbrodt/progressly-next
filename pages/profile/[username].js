import React from "react";
// import client from "../../lib/apollo-client";
// import { gql } from "@apollo/client";
// import { useQuery } from "@apollo/client";

export default function Profile({ user }) {
  return (
    <div>
      {/* Im the page for {user.name}
      {user.resources.map((resource) => (
        <p>{resource.name}</p>
      ))} */}
    </div>
  );
}

// export async function getServerSideProps({ query }) {
//   console.log("query:", query);
//   const { data } = await client.query({
//     query: gql`
//       query test($name: String!) {
//         allUsers(where: { name: $name }) {
//           name
//           resources {
//             name
//           }
//         }
//       }
//     `,
//     variables: {
//       name: query.username,
//     },
//   });
//   console.log("DATA:", data);

//   return {
//     props: {
//       user: data.allUsers[0],
//     },
//   };
// }
