import type { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import axios, { AxiosError } from "axios";

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  return await NextAuth(req, res, {
    providers: [
      CredentialsProvider({
        id: "holdem-note",
        name: "Credentials",
        type: "credentials",
        credentials: {
          email: {},
          password: {},
        },
        async authorize(credentials, req) {
          if (credentials) {
            try {
              const { email, password } = credentials;
              const res = await axios.post(
                "http://localhost:3000/api/holdem-note/login",
                {
                  email,
                  password,
                }
              );
              return res.data;
            } catch (error) {
              if (error instanceof AxiosError) {
                throw new Error(error.response?.data.error);
              }
            }
          }
        },
      }),
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
    ],
    pages: {
      signIn: "/login",
    },
    secret: process.env.SECRET,
    callbacks: {
      async jwt({ token, user }) {
        if (user) {
          token.id = user.id;
        }
        return token;
      },
      async session({ session, token }) {
        if (session) {
          session.user.id = token.id;
        }
        return session;
      },
    },
  });
}
