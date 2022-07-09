import NextAuth from "next-auth";
import { StaticImageData } from "next/image";
import { JWT } from "next-auth/jwt";

import { UserInfo } from ".";

declare module "next-auth" {
  interface Session {
    user: UserInfo;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
  }
}
