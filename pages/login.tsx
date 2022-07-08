import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useAppSelector } from "../app/hooks";
import LoginForm from "../feature/auth/LoginForm";

function Login() {
  const { user } = useAppSelector((state) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user, router]);
  return (
    <div>
      <LoginForm />
    </div>
  );
}

export default Login;
