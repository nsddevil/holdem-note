import Link from "next/link";
import React, { useCallback, useState } from "react";
import { useSession } from "next-auth/react";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

function Header() {
  const [isNav, setIsNav] = useState(false);
  const { data: session, status } = useSession();
  const onSetNav = useCallback(() => {
    setIsNav((prev) => !prev);
  }, []);

  return (
    <div className="sticky h-24 border-b border-b-purple-300">
      <div className="p-4 h-full flex items-center justify-between relative">
        <div>
          <Link href="/">
            <h1 className="text-3xl font-bold text-purple-700 cursor-pointer">
              Holdem Note
            </h1>
          </Link>
        </div>
        <MobileNav isNav={isNav} user={session?.user} onSetNav={onSetNav} />
        <DesktopNav user={session?.user} />
      </div>
    </div>
  );
}

export default Header;
