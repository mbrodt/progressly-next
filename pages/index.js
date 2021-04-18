import Head from "next/head";
import styles from "../styles/Home.module.css";
// import { gql } from "@apollo/client";
import Link from "next/link";
import { useSession } from "next-auth/client";

// import client from "../lib/apollo-client";
import prisma from "../lib/prisma";

export default function Home({ users }) {
  console.log("users:", users);
  const [session, loading] = useSession();
  console.log("session in HOME:", session);
  return (
    <div className="bg-gray-200 max-w-5xl">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-2">
        {users.map((user) => (
          <Link key={user.id} href={`/profile/${user.name}`} className="">
            <a className="rounded shadow p-8 bg-white">
              <p>{user.name}</p> <img src={user.image} alt="" />
            </a>
          </Link>
        ))}
      </div>
      <div className="">Hello world</div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          saveResource({
            name: "Adding one from mads2310",
            link: "https://testlink.com",
          });
        }}
      >
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
  const users = await prisma.user.findMany();
  return {
    props: {
      users,
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
