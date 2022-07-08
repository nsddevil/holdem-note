import { useSession } from "next-auth/react";
import React, { useEffect } from "react";
import { useAppDispatch } from "../../app/hooks";
import { setUser } from "../auth/authSlice";
import Header from "../header/Header";

interface LayoutProps {
  children: React.ReactNode;
}

function Lyout({ children }: LayoutProps) {
  const { data: session, status } = useSession();

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (session?.user) {
      dispatch(setUser({ user: session.user }));
    }
  }, [dispatch, session]);

  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}

export default Lyout;
