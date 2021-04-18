import React from "react";
import prisma from "../../lib/prisma";
import { useSession } from "next-auth/client";
import { useState } from "react";
import { useEffect } from "react";
import MyProfile from "../../components/MyProfile";

export default function Profile({ user }) {
  const [session, loading] = useSession();
  const [isOwner, setIsOwner] = useState(false);

  useEffect(() => {
    console.log("mounted");
    if (!loading) {
      setIsOwner(session?.user?.name === user.name);
    }
  }, [loading]);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      Im the page for {user.name}.{isOwner && <p>Is the owner!</p>}
      {user.resources.map((resource) => (
        <p key={resource.id}>{resource.name}</p>
      ))}
      {isOwner && <MyProfile />}
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const user = await prisma.user.findFirst({
    where: {
      name: {
        equals: query.username,
      },
    },
    include: {
      resources: true,
    },
  });

  return {
    props: {
      user,
    },
  };
}
