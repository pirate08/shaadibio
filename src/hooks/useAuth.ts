import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { useAuthStore } from "@/stores/useAuthStore";
import { RegisterData, LoginData } from "@/types/auth";

// --Register function goes here--
export const useRegister = () => {
  const { setAuth } = useAuthStore();
  const router = useRouter();

  return useMutation({
    mutationFn: async (data: RegisterData) => {
      const res = await fetch(`${process.env.BASE_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const json = await res.json();

      if (!res.ok) throw new Error(json.message || "Registration failed");

      return json;
    },
    onSuccess: (json) => {
      setAuth(json.data, json.data.token);
      toast.success("Account created successfully!");
      router.push("/dashboard");
    },
    onError: (err: Error) => {
      toast.error(err.message);
    },
  });
};

// Login function goes here--
export const useLogin = () => {
  const { setAuth } = useAuthStore();
  const router = useRouter();

  return useMutation({
    mutationFn: async (data: LoginData) => {
      const res = await fetch(`${process.env.BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const json = await res.json();
      if (!res.ok) throw new Error(json.message || "Login failed");

      return json;
    },
    onSuccess: (json) => {
      setAuth(json.data, json.data.token);
      toast.success("Welcome Back!");
      router.push("/dashboard");
    },
    onError: (err: Error) => {
      toast.error(err.message);
    },
  });
};

// --Logout function goes here--
export const useLogout = () => {
  const { logout } = useAuthStore();
  const router = useRouter();

  return () => {
    logout();
    toast.success("Logged out successfully");
    router.push("/login");
  };
};
