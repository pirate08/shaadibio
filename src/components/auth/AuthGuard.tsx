"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/stores/useAuthStore";

const AuthGuard = () => {
  const { isAuthenticated } = useAuthStore();
  const router = useRouter();
};

export default AuthGuard;
