import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export function useLogin() {
  const router = useRouter();
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = useCallback(async () => {
    setError("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error);
        return false;
      }

      login({ id: data.id, username: data.username });
      console.log("data user" + data.username);
      router.refresh();
      return true;
    } catch (error) {
      setError("An unexpected error occurred");
      console.log(error);
      return false;
    } finally {
      setIsLoading(false);
    }
  }, [username, password, login, router]);

  const resetForm = useCallback(() => {
    setUsername("");
    setPassword("");
    setError("");
  }, []);

  return {
    username,
    setUsername,
    password,
    setPassword,
    error,
    isLoading,
    handleLogin,
    resetForm,
  };
}