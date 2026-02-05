"use client";
import { useUI } from "@/context/UIContext";
import { useAuth } from "@/context/AuthContext";
import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";

export default function LoginModal() {
  const router = useRouter();
  const { isLoginOpen, closeLogin } = useUI();
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = useCallback(async () => {
    setError("");
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/jsonja" },
      body: JSON.stringify({ username, password }),
    });
    const data = await res.json();
    if (!res.ok) {
      setError(data.error);
      return;
    }
    login({ id: data.id, username: data.username });

    console.log("data user" + data.username);
    router.refresh();
    closeLogin();
  }, [username, password, login, router, closeLogin]);

  if (!isLoginOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
        onClick={closeLogin}
      ></div>

      <div className="fixed z-50 top-1/2 left-1/2 w-[90%] max-w-sm -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6 shadow-xl">
        <h2 className="text-xl text-black font-semibold mb-4">Login</h2>
        <div className="space-y-3">
          <input
            className="w-full text-black rounded-md border border-zinc-300 px-3 py-2 text-sm focus: outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="userName"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="w-full text-black rounded-md border border-zinc-300 px-3 py-2 text-sm focus: outline-none focus:ring-2 focus:ring-blue-500"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        <button
          className="mt-5 w-full rounded-md bg-blue-600 py-2 text-white font-medium hover:bg-blue-500 transition"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </>
  );
}
