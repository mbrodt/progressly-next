import React from "react";
import { signIn, signOut, useSession } from "next-auth/client";
// import prisma from "../lib/prisma";

export default function Secret() {
  const [session, loading] = useSession();
  console.log("session:", session);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (session) {
    return (
      <div>
        Hello, {session.user.email ?? session.user.name} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  } else {
    return (
      <div>
        You are not logged in! <br />
        <button onClick={() => signIn()}>Sign in</button>
      </div>
    );
  }
}

export async function getServerSideProps() {
  return {
    props: {},
  };
  // return {
  //   props: {
  //     resources,
  //   },
  // };
}
