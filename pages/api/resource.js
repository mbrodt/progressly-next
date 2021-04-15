// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from "../../lib/prisma";
import { getSession } from "next-auth/client";

export default async (req, res) => {
  const { name, link } = JSON.parse(req.body);
  const session = await getSession({ req });
  console.log("SESSION in api route:", session);
  const savedResource = await prisma.resource.create({
    data: {
      name: name,
      link: link,
      description: "lol",
      creator: { connect: { email: "madsbrodt3@gmail.com" } },
      // user: { connect: { email: session?.user?.email } },
    },
  });

  res.json(savedResource);
  // res.status(200).json({ name: 'John Doe' })
};
