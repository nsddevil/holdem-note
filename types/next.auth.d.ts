import NextAuth from "next-auth";
import { StaticImageData } from "next/image";
import { UserInfo } from ".";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: UserInfo;
  }
}
