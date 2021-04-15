import Head from "next/head";
import styles from "../styles/Home.module.css";
// import { gql } from "@apollo/client";
import Link from "next/link";
import { useSession } from "next-auth/client";

// import client from "../lib/apollo-client";
import prisma from "../lib/prisma.ts";

export default function Home({ resources }) {
  const [session, loading] = useSession();
  console.log("session in HOME:", session);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        Resources here
        {resources.map((resource) => (
          <p>{resource.name}</p>
        ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          saveResource({
            name: "Testing with user",
            link: "https://hello.world",
          });
        }}
      >
        <p>lol</p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

async function saveResource(resource) {
  const response = await fetch("/api/resource", {
    method: "POST",
    body: JSON.stringify(resource),
  });

  return await response.json();
}

export async function getServerSideProps() {
  const resources = await prisma.resource.findMany();
  return {
    props: {
      resources,
    },
  };
}

// export async function getStaticProps() {
//   const { data } = await client.query({
//     query: gql`
//       query test {
//         allUsers {
//           name
//         }
//       }
//     `,
//   });
//   console.log("data:", data);

//   return {
//     props: {
//       users: data.allUsers,
//     },
//   };
// }
