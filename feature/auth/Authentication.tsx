import React from "react";
import { useAppSelector } from "../../app/hooks";

interface AuthenticationProps {
  children: React.ReactNode;
}

function Authentication({ children }: AuthenticationProps) {
  const { user } = useAppSelector((state) => state.auth);
  return (
    <>
      {user ? (
        <>{children}</>
      ) : (
        <div className="h-[calc(100vh-6rem)] flex items-center justify-center">
          <h1 className="text-4xl fong-bold">로그인후 이용가능 합니다.</h1>
        </div>
      )}
    </>
  );
}

export default Authentication;
