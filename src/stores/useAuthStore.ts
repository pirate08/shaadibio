import { create } from "zustand";
import { persist } from "zustand/middleware";
import { AuthState } from "@/types/auth";

export const useAuthStore = create<AuthState>()(
  persist((set) => ({
    user: null,
    token: null,
    isAuthenticated: false,

    setAuth: (user, token) => {
      set({ user, token, isAuthenticated: true });
    },

    logout: () => {
      set({ user: null, token: null, isAuthenticated: false });
    },

    updateUser: (data) => {
      set((s) => ({
        user: s.user ? { ...s.user, ...data } : null,
      }));
    },
  })),
);
