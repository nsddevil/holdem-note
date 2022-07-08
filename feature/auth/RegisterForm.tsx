import React, { FormEvent, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { validForm } from "../../lib/validForm";
import ErrorToast from "../components/ErrorToast";
import axios, { AxiosError } from "axios";
import { signIn } from "next-auth/react";

function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cfPassword, setCfPassword] = useState("");
  const registerRef = useRef<HTMLInputElement>(null);

  const onRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = { email, password, cfPassword };
    const errors = validForm(form);
    if (errors.length !== 0) {
      toast.error(<ErrorToast errors={errors} />);
      return;
    }
    try {
      const res = await axios.post("/api/holdem-note/register", {
        email,
        password,
      });
      if (res.status === 200) {
        toast.success("회원가입 완료. 로그인하세요");
        signIn();
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.error);
      }
    }
  };
  useEffect(() => {
    if (registerRef.current !== null) {
      registerRef.current.focus();
    }
  }, []);

  return (
    <div className="h-[calc(100vh-8rem)] flex items-center justify-center">
      <div className="px-6 py-12 w-96 rounded-lg shadow-xl shadow-purple-200">
        <h1 className="py-4 text-3xl text-purple-500 font-bold tracking-wider text-center">
          Register
        </h1>
        <form className="mt-4 flex flex-col gap-6" onSubmit={onRegister}>
          <div>
            <input
              className="w-full p-4 border rounded-lg text-lg"
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              className="w-full p-4 border rounded-lg text-lg"
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <input
              className="w-full p-4 border rounded-lg text-lg"
              type="password"
              name="cfPassword"
              placeholder="Confirm Password"
              value={cfPassword}
              onChange={(e) => setCfPassword(e.target.value)}
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full p-4 text-xl bg-purple-400 text-white font-bold rounded hover:bg-purple-500 capitalize"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
