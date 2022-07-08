import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { UserInfo } from "../../types";
import Avatar from "./Avatar";

interface DesktopNavProps {
  user?: UserInfo;
}

function DesktopNav({ user }: DesktopNavProps) {
  return (
    <ul className="hidden md:flex gap-2">
      {user ? (
        <>
          <Avatar image={user.image} email={user.email} />
          <li
            className="px-4 py-2 text-lg flex items-center justify-center cursor-pointer rounded bg-purple-500 text-white hover:scale-105"
            onClick={() => signOut()}
          >
            Logout
          </li>
        </>
      ) : (
        <>
          <li
            className="px-4 py-2 text-lg bg-purple-500 rounded text-white cursor-pointer hover:scale-105"
            onClick={() => signIn()}
          >
            Login
          </li>
          <Link href="/register">
            <li className="px-4 py-2 text-lg cursor-pointer border border-purple-500 rounded hover:scale-105">
              Register
            </li>
          </Link>
        </>
      )}
    </ul>
  );
}

export default DesktopNav;
