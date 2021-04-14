import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import Adapters from "next-auth/adapters";

import prisma from "../../../lib/prisma";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Discord({
      clientId: process.env.DISCORD_ID,
      clientSecret: process.env.DISCORD_SECRET,
    }),
    Providers.Twitter({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET,
    }),
  ],
  adapter: Adapters.Prisma.Adapter({ prisma }),

  // A database is optional, but required to persist accounts in a database
  database: process.env.DATABASE_URL,
});
