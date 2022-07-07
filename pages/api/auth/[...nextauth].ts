import type { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  // Do whatever you want here, before the request is passed down to `NextAuth`
  return await NextAuth(req, res, {
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
    ],
    secret: process.env.SECRET,
  });
}