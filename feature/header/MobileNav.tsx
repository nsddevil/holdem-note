import React from "react";
import { signIn, signOut } from "next-auth/react";
import Avatar from "./Avatar";
import { UserInfo } from "../../types";
import { MdClose, MdMenu } from "react-icons/md";

interface MobileNavProps {
  isNav: boolean;
  user?: UserInfo;
  onSetNav: () => void;
}

function MobileNav({ isNav, user, onSetNav }: MobileNavProps) {
  return (
    <>
      <div className="md:hidden cursor-pointer">
        {!isNav ? (
          <MdMenu size={30} onClick={onSetNav} />
        ) : (
          <MdClose size={30} onClick={onSetNav} />
        )}
      </div>
      <ul
        className={`absolute top-0 ${
          isNav ? "left-0" : "left-[-100%]"
        } w-[60%] h-screen border-r border-r-gray-200 bg-black text-white duration-200 ease-in md:hidden`}
      >
        {user ? (
          <>
            <li className="p-6">
              <Avatar image={user.image} email={user.email} />
            </li>
            <li
              className="p-4 text-xl font-semibold border-b hover:bg-white hover:text-black cursor-pointer"
              onClick={() => signOut()}
            >
              Logout
            </li>
          </>
        ) : (
          <>
            <li
              className="p-4 text-xl font-semibold border-b hover:bg-white hover:text-black cursor-pointer"
              onClick={() => signIn()}
            >
              Login
            </li>
          </>
        )}
      </ul>
    </>
  );
}

export default MobileNav;
