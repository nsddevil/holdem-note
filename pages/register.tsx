import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useAppSelector } from "../app/hooks";
import RegisterForm from "../feature/auth/RegisterForm";

function Register() {
  const { user } = useAppSelector((state) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user, router]);

  return (
    <div>
      <RegisterForm />
    </div>
  );
}

export default Register;
