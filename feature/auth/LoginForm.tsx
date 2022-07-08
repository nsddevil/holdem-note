import { signIn } from "next-auth/react";
import React, {
  FormEvent,
  MouseEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { toast } from "react-toastify";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginRef = useRef<HTMLInputElement>(null);

  const onLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      toast.error("빈항목을 입력하세요");
      return;
    }
    const result = await signIn("holdem-note", {
      email,
      password,
      redirect: false,
    });

    if (!result?.ok) {
      return toast.error(result?.error);
    }
  };
  const onGoogle = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await signIn("google", {
      callbackUrl: "http://localhost:3000",
    });
  };
  useEffect(() => {
    if (loginRef.current !== null) {
      loginRef.current.focus();
    }
  }, []);

  return (
    <div className="h-[calc(100vh-8rem)] flex items-center justify-center">
      <div className="px-6 py-12 w-96 rounded-lg shadow-xl shadow-purple-200">
        <h1 className="py-4 text-3xl text-purple-500 font-bold tracking-wider text-center">
          Login
        </h1>
        <form className="mt-4 flex flex-col gap-6" onSubmit={onLogin}>
          <div>
            <input
              ref={loginRef}
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
            <button
              type="submit"
              className="w-full p-4 text-xl bg-purple-400 text-white font-bold rounded hover:bg-purple-500 capitalize"
            >
              Login
            </button>
          </div>
          <p className="text-center text-gray-500 text-sm">OR</p>
          <div>
            <button
              type="button"
              className="w-full p-4 text-xl bg-red-500 text-white font-bold rounded hover:bg-red-600 capitalize"
              onClick={onGoogle}
            >
              Google Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
