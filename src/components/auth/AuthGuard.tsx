"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/stores/useAuthStore";

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuthStore();
  const router = useRouter();
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    setHasHydrated(true);
  }, []);

  useEffect(() => {
    if (hasHydrated && !isAuthenticated) {
      router.replace("/login");
    }
  }, [hasHydrated, isAuthenticated, router]);

  // Wait for hydration before rendering anything
  if (!hasHydrated)
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F5F0EB]">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-4 border-[#8B1A4A] border-t-transparent rounded-full animate-spin" />
          <p className="text-sm text-gray-500">Loading...</p>
        </div>
      </div>
    );

  // After hydration if not authenticated return null (redirect is happening)
  if (!isAuthenticated) return null;

  return <>{children}</>;
};

export default AuthGuard;
